import { Dispatch, SetStateAction } from "react";
import { GameCardType, GameField } from "../../types/CardGameTypes";

const gameActionQueue: ((gameField: GameField) => GameField)[] = [];

export const doStep = (
  gameField: GameField,
  update: Dispatch<SetStateAction<GameField>>
) => {
  gameActionQueue.push(trigger(gameField.enemy.front, "enemy"));
  gameActionQueue.push(trigger(gameField.enemy.middle, "enemy"));
  gameActionQueue.push(trigger(gameField.enemy.back, "enemy"));
  gameActionQueue.push(trigger(gameField.player.front, "player"));
  gameActionQueue.push(trigger(gameField.player.middle, "player"));
  gameActionQueue.push(trigger(gameField.player.back, "player"));
  while (gameActionQueue.length != 0) {
    const toDo = gameActionQueue.pop();
    const newField = toDo && toDo(gameField);
    newField && update({ player: newField.player, enemy: newField.enemy });
  }
};

const trigger = (
  card: GameCardType | undefined,
  team: "enemy" | "player"
): ((gameField: GameField) => GameField) => {
  if (card == undefined || card.health == 0) return skip;
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
