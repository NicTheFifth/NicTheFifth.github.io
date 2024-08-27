import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { createRef, useState } from "react";
import { GameField } from "../types/CardGameTypes";
import GameCard from "../components/cardGame/GameCard";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { doStep } from "../features/CardGame/Game";
import { enemies } from "../assets/enemies.json";
import { useMediaQuery, useTheme } from "@mui/material";

const CardGame = () => {
  const theme = useTheme();
  const playable = useMediaQuery(theme.breakpoints.up("md"));
  const [gameState, setGameState] = useState<GameField>({
    player: {
      front: { ...enemies.shmog },
      middle: {
        attack: 2,
        countdown: 3,
        countdownCurrent: 1,
        health: 10,
        maxHealth: 20,
        name: "Shmog",
      },
      back: { ...enemies.shmog },
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

  const playerFrontRef = createRef<HTMLDivElement>();
  const enemyFrontRef = createRef<HTMLDivElement>();

  const step = (_: any) => {
    doStep(gameState, setGameState);
  };

  return playable ? (
    <>
      <Grid container spacing={6} mx={2} mt={4}>
        <Grid container xs={6} spacing={2} direction="row-reverse">
          <Grid xs={4} ref={playerFrontRef} position="relative" left={0}>
            {gameState.player.front && (
              <GameCard card={gameState.player.front} />
            )}
          </Grid>
          <Grid
            xs={4}
            // ref={}
          >
            {gameState.player.middle && (
              <GameCard card={gameState.player.middle} />
            )}
          </Grid>
          <Grid
            xs={4}
            // ref={}
          >
            {gameState.player.back && <GameCard card={gameState.player.back} />}
          </Grid>
        </Grid>
        <Grid container xs={6} spacing={2}>
          <Grid xs={4} ref={enemyFrontRef}>
            {gameState.enemy.front && <GameCard card={gameState.enemy.front} />}
          </Grid>
          <Grid
            xs={4}
            // ref={}
          >
            {gameState.enemy.middle && (
              <GameCard card={gameState.enemy.middle} />
            )}
          </Grid>
          <Grid
            xs={4}
            // ref={}
          >
            {gameState.enemy.back && <GameCard card={gameState.enemy.back} />}
          </Grid>
        </Grid>
      </Grid>
      <Button onClick={step}>Step</Button>
      <Button
        onClick={() => {
          const pfl = playerFrontRef.current?.offsetLeft;
          const efl = enemyFrontRef.current?.offsetLeft;
          const ew = enemyFrontRef.current?.clientWidth;
          if (playerFrontRef.current && pfl && efl && ew) {
            playerFrontRef.current.style.transition = "0.5s left ease-in";
            playerFrontRef.current.style.left = efl - ew * (2 / 3) - pfl + "px";
            playerFrontRef.current?.addEventListener(
              "transitionend",
              () => {
                if (playerFrontRef.current) {
                  playerFrontRef.current.style.transition =
                    "0.5s left ease-out";
                  playerFrontRef.current.style.left = 0 + "px";
                }
              },
              { once: true }
            );
          }
        }}
      >
        Attack animate
      </Button>
    </>
  ) : (
    <>
      <Typography variant="h1" padding={10} textAlign="center">
        Can't play this on such a small screen
      </Typography>
    </>
  );
};

export default CardGame;
