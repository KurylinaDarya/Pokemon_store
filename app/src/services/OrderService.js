import { api } from "../api/config";

const url = "/order";

class OrderService {
  static instance = new OrderService();

  getOrders() {
    return api.get(url);
  }

  addOrder(newOrder) {
    return api.post(url, newOrder);
  }
}

export default OrderService.instance;
