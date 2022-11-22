import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../../routes/routeNames";
import CartButton from "../../../components/CartButton/index";
import SnackbarWithAlert from "../../../components/Snackbar/index";

import iconCartDelete from "../../../static/img/iconCartDelete.png";

import styles from "./styles.module.scss";

const Cart = ({
  cart,
  onDeleteItem,
  onIncrementItem,
  onDecrementItem,
  onCreateOrder,
  order,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>My Cart</h1>

      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {!cart.quantity ? (
            <div className={styles.titleCart}>Your shopping cart is empty.</div>
          ) : (
            Object.entries(cart?.itemsList).map(([id, item]) => (
              <div key={item.id} className={styles.cardContainer}>
                <div className={styles.card}>
                  <img height={100} src={item.image} alt="pokemon" />

                  <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.price}>Price: $ {item.price}</div>
                  </div>
                </div>

                <div className={styles.buttonsContainer}>
                  <div onClick={() => onDeleteItem(id)}>
                    <img src={iconCartDelete} alt="icons cart " />
                  </div>

                  <CartButton
                    onDecrementItem={onDecrementItem}
                    quantity={item.quantity}
                    onIncrementItem={onIncrementItem}
                    id={item.id}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.totalPriceContainer}>
          <h2 className={styles.titleTotalPrice}>Total price</h2>
          <div className={styles.subTotal}>
            <div>SubTotal</div>
            <div>$ {cart?.totalPrice}</div>
          </div>
          <div className={styles.total}>
            <div>Total</div>
            <div>$ {cart?.totalPrice}</div>
          </div>
          <button onClick={onCreateOrder} className={styles.buttonOrder}>
            Order
          </button>
        </div>
      </div>

      <Link to={ROUTE_NAMES.SHOP} className={styles.link}>
        Back to store
      </Link>

      {order.isLoading && (
        <SnackbarWithAlert
          timeAlert={3000}
          textAlert="Your order is accepted!"
          severity="success"
        />
      )}
    </div>
  );
};

export default Cart;
