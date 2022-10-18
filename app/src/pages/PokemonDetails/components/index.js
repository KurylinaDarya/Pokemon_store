import { Link } from "react-router-dom";
import lowerCase from "lodash/lowerCase";
import startCase from "lodash/startCase";

import Spinner from "../../../components/Spinner/index";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import styles from "./styles.module.scss";

const ProductDetails = ({ product, isLoading, error }) => {
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
              {product.stats?.map((stat) => (
                <div key={stat.title} className={styles.stats}>
                  <p className={styles.stat}>{stat.title}</p>
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

            <button className={styles.button}>Add to cart</button>
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
