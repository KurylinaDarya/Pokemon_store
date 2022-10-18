import { api } from "../../api/config";

const url = "/cart";
const itemUrl = `${url}/item`;

class CartService {
  static instance = new CartService();

  getCartInfo() {
    return api.get(url);
  }

  addItem(itemToAdd) {
    return api.post(itemUrl, itemToAdd);
  }

  deleteItem(id) {
    return api.delete(`${itemUrl}/${id}`);
  }

  updateItem(payload) {
    return api.patch(itemUrl, payload);
  }
}

export default CartService.instance;
