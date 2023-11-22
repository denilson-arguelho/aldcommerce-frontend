import { OrderDTO } from "../models/order";
import * as CarRepository from "../localstorage/cart-repository";

export function saveCart(cart: OrderDTO) {
  CarRepository.save(cart);
}
