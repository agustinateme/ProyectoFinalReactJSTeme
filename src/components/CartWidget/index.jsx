import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext/index';
import cart from './assets/cart.png';
import './index.css';

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);

    return (
        <div className="CartWidgetContainer">
            <img src={cart} alt="cart-widget" className="CartWidgetimg" />
            <p className="CartWidgetNumber">
                {cartQuantity() > 0 && cartQuantity()}
            </p>
        </div>
    );
}

export default CartWidget;