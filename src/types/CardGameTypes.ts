export type GameField = { player: GameRow; enemy: GameRow };

export type GameRow = {
  front?: GameCardType;
  middle?: GameCardType;
  back?: GameCardType;
};

export type GameCardType = {
  name: string;
  maxHealth: number;
  health: number;
  attack: number;
  countdown: number;
  countdownCurrent: number;
};
