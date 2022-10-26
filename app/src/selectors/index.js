import { createSelector } from "reselect";

export const isAuthSelector = (state) => state.auth.isAuth;

export const userInfoSelector = (state) => state.auth.data;

export const pokemonsSelector = (state) => state.pokemons;

export const pokemonsProductsSelector = (state) => state.pokemons.data;

export const productDetailsSelector = (state) => state.productDetails;

export const cartSelector = (state) => state.cart;

export const cartItemsListSelector = (state) => state.cart.itemsList;

export const orderSelector = (state) => state.order.data;

export const orderIsLoading = (state) => state.order.isLoading;

export const mergedWithCartSelector = createSelector(
  pokemonsProductsSelector,
  cartItemsListSelector,
  (products, cartList) => {
    if (products && cartList) {
      return products.map((product) => {
        const updatedProduct = {
          ...product,
          quantity: cartList[product.id]?.quantity,
        };

        return cartList[product.id] ? updatedProduct : product;
      });
    }
    return null;
  }
);

export const orderDetailsSelector = createSelector(
  orderSelector,
  (state, id) => id,
  (order, id) => {
    if (order && id) {
      const orderItem = order.find((order) => order._id === id);

      return orderItem?.itemsList;
    }
    return null;
  }
);
