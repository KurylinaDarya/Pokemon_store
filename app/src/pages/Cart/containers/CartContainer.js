import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCart } from "../../../hooks/useCart";

import { createNewOrder } from "../thunks/index";

import Cart from "../components/index";

const CartContainer = () => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.order);

  const { cart, handleDeleteItem, handleIncrementItem, handleDecrementItem } =
    useCart();

  const handleCreateOrder = useCallback(() => {
    const { quntity, error, isLoading, ...otherCartFields } = cart;

    const { customerId, totalPrice, itemsList } = otherCartFields;

    const customItemsList = Array.from(Object.values(itemsList));

    dispatch(
      createNewOrder({ customerId, totalPrice, itemsList: customItemsList })
    );
  }, [cart, dispatch]);

  return (
    <Cart
      cart={cart}
      onDeleteItem={handleDeleteItem}
      onIncrementItem={handleIncrementItem}
      onDecrementItem={handleDecrementItem}
      onCreateOrder={handleCreateOrder}
      order={order}
    />
  );
};

export default CartContainer;
