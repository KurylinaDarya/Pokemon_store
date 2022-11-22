import { Link } from "react-router-dom";
import lowerCase from "lodash/lowerCase";
import startCase from "lodash/startCase";

import Spinner from "../../../components/Spinner/index";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import CartButton from "../../../components/CartButton/index";

import { useCart } from "../../../hooks/useCart";

import iconCartDelete from "../../../static/img/iconCartDelete.png";
import hp from "../../../static/img/hp.png";
import attack from "../../../static/img/attack.png";
import defence from "../../../static/img/defence.png";
import specialAttack from "../../../static/img/specialAttack.png";
import specialDefense from "../../../static/img/specialDefense.png";
import speed from "../../../static/img/speed.png";

import styles from "./styles.module.scss";

const favicon = [hp, attack, defence, specialAttack, specialDefense, speed];

const ProductDetails = ({ product, isLoading, error }) => {
  const {
    cart,
    handleAddItem,
    handleDeleteItem,
    handleIncrementItem,
    handleDecrementItem,
  } = useCart();

  const productStatsWithIcons = product.stats?.map((stat, index) => {
    return { ...stat, icon: favicon[index] };
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className={styles.container}>
            <div className={styles.title}>{startCase(product.name)}</div>

            <div className={styles.statsContainer}>
              <div className={styles.subtitle}>Stats:</div>

              {productStatsWithIcons?.map((stat) => (
                <div key={stat.title} className={styles.stats}>
                  <p className={styles.stat}>
                    <img height={20} src={stat.icon} alt="icon" /> {stat.title}
                  </p>
                  <p className={styles.stat}>- {stat.value}</p>
                </div>
              ))}
            </div>

            <div className={styles.abilities}>
              <div className={styles.subtitle}>Abilities:</div>
              {product.abilities?.map((ability) => (
                <div key={ability.title} className={styles.ability}>
                  {startCase(ability.title)} - {lowerCase(ability.description)}.
                </div>
              ))}
            </div>

            <div className={styles.price}>Price: $ {product.price}</div>

            {cart.itemsList[product.id]?.quantity ? (
              <div>
                <CartButton
                  id={product.id}
                  quantity={cart.itemsList[product.id]?.quantity}
                  onDecrementItem={handleDecrementItem}
                  onIncrementItem={handleIncrementItem}
                />

                <div
                  onClick={() => handleDeleteItem(product.id)}
                  className={styles.cart}
                >
                  <img src={iconCartDelete} alt="icons cart " />
                </div>
              </div>
            ) : (
              <button
                onClick={() =>
                  handleAddItem({
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                  })
                }
                className={styles.button}
              >
                Add to cart
              </button>
            )}
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      )}
      <Link to={ROUTE_NAMES.SHOP} className={styles.link}>
        Back to store
      </Link>
    </>
  );
};

export default ProductDetails;
