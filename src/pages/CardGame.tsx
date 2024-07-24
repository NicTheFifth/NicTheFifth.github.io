import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { GameField } from "../types/CardGameTypes";
import GameCard from "../components/cardGame/GameCard";
import Button from "@mui/material/Button";
import { doStep } from "../features/CardGame/Game";

const CardGame = () => {
  const [gameState, setGameState] = useState<GameField>({
    player: {
      front: {
        attack: 1,
        countdown: 3,
        countdownCurrent: 2,
        health: 10,
        maxHealth: 20,
        name: "Shmog",
      },
      middle: {
        attack: 2,
        countdown: 3,
        countdownCurrent: 1,
        health: 10,
        maxHealth: 20,
        name: "Shmog",
      },
    },
    enemy: {
      front: {
        attack: 4,
        countdown: 2,
        countdownCurrent: 1,
        health: 10,
        maxHealth: 20,
        name: "Shmog",
      },
    },
  });

  const step = (_: any) => {
    doStep(gameState, setGameState);
  };

  return (
    <>
      <Grid container spacing={6} mx={2} mt={4}>
        <Grid container xs={6} spacing={2} direction="row-reverse">
          <Grid xs={4}>
            {gameState.player.front && (
              <GameCard card={gameState.player.front} />
            )}
          </Grid>
          <Grid xs={4}>
            {gameState.player.middle && (
              <GameCard card={gameState.player.middle} />
            )}
          </Grid>
          <Grid xs={4}>
            {gameState.player.back && <GameCard card={gameState.player.back} />}
          </Grid>
        </Grid>
        <Grid container xs={6} spacing={2}>
          <Grid xs={4}>
            {gameState.enemy.front && <GameCard card={gameState.enemy.front} />}
          </Grid>
          <Grid xs={4}>
            {gameState.enemy.middle && (
              <GameCard card={gameState.enemy.middle} />
            )}
          </Grid>
          <Grid xs={4}>
            {gameState.enemy.back && <GameCard card={gameState.enemy.back} />}
          </Grid>
        </Grid>
      </Grid>
      <Button onClick={step}>Step</Button>
    </>
  );
};

export default CardGame;
