import { Dispatch, SetStateAction } from "react";
import { GameCardType, GameField } from "../../types/CardGameTypes";

const gameActionQueue: (() => (gameField: GameField) => GameField)[] = [];

export const doStep = (
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
  }
};

const queueTrigger = (
  card: GameCardType | undefined,
  team: "enemy" | "player"
) => {
  return () => {
    return trigger(card, team);
  };
};

const trigger = (
  card: GameCardType | undefined,
  team: "enemy" | "player"
): ((gameField: GameField) => GameField) => {
  if (card == undefined || card.health <= 0) return skip;
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
  team: "enemy" | "player",
  card: GameCardType,
  gameField: GameField
): GameField => {
  const enemyTeam = team === "enemy" ? gameField.player : gameField.enemy;
  if (enemyTeam.front !== undefined) {
    enemyTeam.front.health -= card.attack;
    enemyTeam.front.health <= 0 && (enemyTeam.front = undefined);
    return gameField;
  }
  if (enemyTeam.middle !== undefined) {
    enemyTeam.middle.health -= card.attack;
    enemyTeam.middle.health < 0 && (enemyTeam.middle = undefined);
    return gameField;
  }
  if (enemyTeam.back !== undefined) {
    enemyTeam.back.health -= card.attack;
    enemyTeam.back.health < 0 && (enemyTeam.back = undefined);
    return gameField;
  }

  return gameField;
};
