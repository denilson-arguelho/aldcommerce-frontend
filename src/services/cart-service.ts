import { OrderDTO, OrderItemDTO } from "../models/order";
import * as CartRepository from "../localstorage/cart-repository";
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
  CartRepository.save(cart);
}

export function getCart(): OrderDTO {
  return CartRepository.get();
}

export function addProduct(product: ProductDTO) {
  const cart = CartRepository.get();
  const item = cart.items.find((x) => x.productId === product.id);

  if (!item) {
    const newItem = new OrderItemDTO(
      product.id,
      1,
      product.name,
      product.price,
      product.imgUrl
    );

    cart.items.push(newItem);
    CartRepository.save(cart);
  }
}

export function clearCart() {
  CartRepository.clear();
}

/* Função que incrementa a quantidade do meu produto */
export function increaseItem(productId: number) {
  const cart = CartRepository.get();
  const item = cart.items.find((x) => x.productId === productId);

  if (item) {
    item.quantity++;
    CartRepository.save(cart);
  }
}

export function decreaseItem(productId: number) {
  const cart = CartRepository.get();
  const item = cart.items.find((x) => x.productId === productId);

  if (item) {
    item.quantity--;
    if(item.quantity < 1){
      cart.items = cart.items.filter(x => x.productId !== productId)
    }
    CartRepository.save(cart);
  }
}
