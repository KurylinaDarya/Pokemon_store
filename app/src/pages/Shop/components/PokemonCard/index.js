import { memo } from "react";
import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import iconCartDelete from "../../../../static/img/iconCartDelete.png";

import CartButton from "../../../../components/CartButton/index";

import { useCart } from "../../../../hooks/useCart";

import styles from "./styles.module.scss";

const PokemonCard = ({
  id,
  name,
  image,
  price,
  quantity,
  onNavigateToPokemonDetail,
}) => {
  const {
    handleAddItem,
    handleDeleteItem,
    handleIncrementItem,
    handleDecrementItem,
  } = useCart();

  return (
    <div className={quantity ? styles.wrapperQuantity : styles.wrapper}>
      <Card className={styles.card} sx={{ maxWidth: 300 }}>
        <div onClick={() => onNavigateToPokemonDetail(id)}>
          <CardMedia component="img" height="150" image={image} alt="pokemon" />
        </div>

        <CardContent>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.price}>$ {price} USD</h2>
        </CardContent>

        <CardActions>
          <div className={styles.buttonContainer}>
            {quantity ? (
              <div className={styles.cart}>
                <CartButton
                  id={id}
                  quantity={quantity}
                  onDecrementItem={handleDecrementItem}
                  onIncrementItem={handleIncrementItem}
                />

                <div
                  onClick={() => handleDeleteItem(id)}
                  className={styles.cart}
                >
                  <img src={iconCartDelete} alt="icons cart " />
                </div>
              </div>
            ) : (
              <button
                onClick={() =>
                  handleAddItem({ id, name, image, price, quantity: 1 })
                }
                className={styles.button}
              >
                Add to cart
              </button>
            )}
          </div>
        </CardActions>
      </Card>
    </div>
  );
};
export default memo(PokemonCard);
