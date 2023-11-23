import { OrderDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

 /* Adicionando item no localStorage */
export function save(cart: OrderDTO){
    const str = JSON.stringify(cart)
    localStorage.setItem(CART_KEY,str)
}

/* Buscar items do carrinho no localStorage */
export function get():OrderDTO{
    const str = localStorage.getItem(CART_KEY) || '{"items"=[]}'
    return JSON.parse(str)
}