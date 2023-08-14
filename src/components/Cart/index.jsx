import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext/index';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/index';
import './index.css'

const Cart = () => {
    const { cart, clear, total } = useContext(CartContext);

    return (
        <div>
            {cart.length > 0 ? (
                <div className='CartItemListContainer'>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <p className='CartItemListTotal'>TOTAL TO PAY: ${total().toFixed(2)}</p>
                    <div className='CartItemListBtns'>
                        <button className='empty' onClick={clear}>EMPTY CART</button>
                        <Link className='finish' to='/checkout'>FINISH SHOPPING</Link>
                    </div>
                </div>
            ) : (
                <div className='CartEmpty'>
                    <p className='title'>YOUR CART IS EMPTY</p>
                    <p className='subtitle'>It looks like your shopping cart is empty right now.</p>
                    <p className='subtitle'>Why not explore our collection and add some items?</p>
                    <Link className='goShopping' to='/Products'>Go shopping</Link>
                </div>
            )}
        </div>
    );
}

export default Cart;