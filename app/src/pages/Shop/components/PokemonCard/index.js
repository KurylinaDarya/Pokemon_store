import { memo } from "react";
import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import styles from "./styles.module.scss";

const PokemonCard = ({ name, image, price, onNavigateToPokemonDetail }) => {
  return (
    <div onClick={onNavigateToPokemonDetail}>
      <Card className={styles.card} sx={{ maxWidth: 300 }}>
        <CardMedia component="img" height="150" image={image} alt="pokemon" />
        <CardContent>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.price}>$ {price} USD</h2>
        </CardContent>
        <CardActions>
          <Button className={styles.button} size="small">
            Buy Pokemon
          </Button>
          <Button className={styles.button} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default memo(PokemonCard);
