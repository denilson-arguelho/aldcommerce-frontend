import { OrderDTO } from "../models/order";

 /* Adicionando item no localStorage */
export function save(cart: OrderDTO){
    const str = JSON.stringify(cart)
    localStorage.setItem("devsuperior.com.dscommerce/Cart",str)
}

/* Buscar items do carrinho no localStorage */
export function get():OrderDTO{
    const str = localStorage.getItem("devsuperior.com.dscommerce/Cart") || '{"items"=[]}'
    return JSON.parse(str)
}