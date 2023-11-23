import { OrderDTO, OrderItemDTO } from "../models/order";
import * as CartRepository from "../localstorage/cart-repository";
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
  CartRepository.save(cart);
}

export function getCart(): OrderDTO {
  return CartRepository.get();
}

export function addProduct(product: ProductDTO){
  const cart = CartRepository.get();
  const item = cart.items.find(x => x.productId === product.id);

  if(!item){
    const newItem = new OrderItemDTO(product.id, 1, 
      product.name,product.price, product.imgUrl)

      cart.items.push(newItem)
      CartRepository.save(cart)
  }
}