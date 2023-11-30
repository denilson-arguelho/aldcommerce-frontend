import './styles.css'
import cartIcon from "../../assets/cart.svg";
import { useState } from 'react';
import * as cartService from '../../services/cart-service'

export function CartIcon(){
    const [cartCount, setCartCount] = useState(cartService.getCart())


    return(
        <>
         <img src={cartIcon} alt="Carrinho de compras" />
         <div className="dsc-cart-count">{cartCount.items.length}</div>
        </>
    );
}