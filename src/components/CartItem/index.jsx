import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext/index';
import './index.css'

const CartItem = ({ item }) => {
    const { deleteItem, lessItem, moreItem } = useContext(CartContext);

    //Disminuye la cantidad del artículo dado en el carrito en 1, si la cantidad del artículo es mayor que 1.
    //Llama a la función 'lessItem' desde CartContext para actualizar el estado del carrito.
    const remove = (item) => {
        if (item.quantity > 1) {
            lessItem(item);
        }
    };

    //Aumenta en 1 la cantidad del artículo dado en el carrito, si la cantidad del artículo es menor que el stock disponible.
    //Llama a la función 'moreItem' desde CartContext para actualizar el estado del carrito.
    const add = (item) => {
        if (item.quantity < item.stock) {
            moreItem(item);
        }
    };

    return (
        <div className="CartItemContainer">
            <img src={item.image1} alt={item.name} className="imgItem"/>
            <p className="nameItem">{item.brand} {item.name}</p>
            <div className="operatorItem">
                <div className="btnsQuantity">
                    <button className="btnLess" onClick={() => remove(item)}>-</button>
                    <p className="quantity">{item.quantity}</p>
                    <button className="btnMore" onClick={() => add(item)}>+</button>
                </div>
                <div className="operator">
                    <p className="priceItem"> ${item.price}</p>
                    <p className="quantityItem">x {item.quantity} =</p>
                    <p className="subtotalItem">${(item.quantity * item.price).toFixed(2)}</p>
                </div>
            </div>
            <div className="deleteItem">
                <button onClick={() => deleteItem(item.id)} >x</button>
            </div>
        </div>
    );
}

export default CartItem;



