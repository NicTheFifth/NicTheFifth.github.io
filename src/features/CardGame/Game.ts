import { Dispatch, SetStateAction } from "react";
import { GameCardType, GameField, GameRow } from "../../types/CardGameTypes";

const gameActionQueue: (() =>
  | ((gameField: GameField) => GameField)
  | undefined)[] = [];

export const doStep = async (
  gameField: GameField,
  update: Dispatch<SetStateAction<GameField>>
) => {
  gameActionQueue.push(queueTrigger(gameField.player.back, "player"));
  gameActionQueue.push(queueTrigger(gameField.player.middle, "player"));
  gameActionQueue.push(queueTrigger(gameField.player.front, "player"));
  gameActionQueue.push(queueTrigger(gameField.enemy.back, "enemy"));
  gameActionQueue.push(queueTrigger(gameField.enemy.middle, "enemy"));
  gameActionQueue.push(queueTrigger(gameField.enemy.front, "enemy"));
  while (gameActionQueue.length != 0) {
    const toDoSupplier = gameActionQueue.pop();
    const toDo = toDoSupplier && toDoSupplier();
    toDo && toDo(gameField);
    update({ player: gameField.player, enemy: gameField.enemy });
    toDo && (await new Promise((r) => setTimeout(r, 1000)));
  }
};

const queueTrigger = (
  card: GameCardType | undefined,
  team: keyof GameField
) => {
  return () => {
    return trigger(card, team);
  };
};

const trigger = (
  card: GameCardType | undefined,
  team: keyof GameField
): ((gameField: GameField) => GameField) | undefined => {
  if (card == undefined || card.health <= 0) return undefined;
  card.countdownCurrent -= 1;
  if (card.countdownCurrent == 0)
    return (gameField: GameField) => {
      const field = attack(team, card, gameField);
      card.countdownCurrent = card.countdown;
      return field;
    };
  return skip;
};

const skip = (gameField: GameField): GameField => gameField;

const attack = (
  team: keyof GameField,
  card: GameCardType,
  gameField: GameField
): GameField => {
  const enemyTeam = team === "enemy" ? gameField.player : gameField.enemy;
  if (enemyTeam.front !== undefined) {
    enemyTeam.front.health -= card.attack;
    enemyTeam.front.health <= 0 && kill(enemyTeam, "front");
    return gameField;
  }
  if (enemyTeam.middle !== undefined) {
    enemyTeam.middle.health -= card.attack;
    enemyTeam.middle.health < 0 && kill(enemyTeam, "middle");
    return gameField;
  }
  if (enemyTeam.back !== undefined) {
    enemyTeam.back.health -= card.attack;
    enemyTeam.back.health < 0 && kill(enemyTeam, "back");
    return gameField;
  }

  return gameField;
};

const kill = (row: GameRow, position: keyof GameRow) => {
  row[position] = undefined;
  if (!row.front) {
    row.front = row.middle;
    row.middle = undefined;
  }
  if (!row.middle) {
    row.middle = row.back;
    row.back = undefined;
  }
};
