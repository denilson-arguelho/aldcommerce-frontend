import { OrderDTO } from "../models/order";
import * as CartRepository from "../localstorage/cart-repository";

export function saveCart(cart: OrderDTO) {
  CartRepository.save(cart);
}

export function getCart(): OrderDTO {
  return CartRepository.get();
}
