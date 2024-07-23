import Box from "@mui/material/Box";
import { GameCardType } from "../../types/CardGameTypes";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

type CardProps = { card: GameCardType };

const GameCard = ({ card }: CardProps) => {
  return card ? (
    <Card>
      {" "}
      <CardHeader
        title={card.name}
        titleTypographyProps={{ textAlign: "center" }}
      />{" "}
      <Grid container mx={2}>
        <Grid xs={6}> {card.health}</Grid>
        <Grid xs={6} textAlign="end">
          {card.attack}
        </Grid>
      </Grid>
      <Box width="100%" textAlign="center">
        {card.countdownCurrent}
      </Box>
    </Card>
  ) : (
    <div>Card</div>
  );
};

export default GameCard;
