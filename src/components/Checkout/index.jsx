import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import './index.css'
import { CartContext } from "../../context/CartContext/index";

const Checkout = () => {
    const { cart, total, clear } = useContext(CartContext)
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
   

    const buyerData = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
   
    const finalizePurchase = (e) => {
        e.preventDefault()
        console.log(cart.length)
        if (cart.length != 0) {
            let order = { user, item: cart, total: total().toFixed(2), date: serverTimestamp() }
            const ventas = collection(db, 'orders')
            addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id);
                clear()
            })
            .catch((error) => console.log(error))
        }
    }

    //en vez de disabled mostraré que son diferentes los emails
    return (
        <div className="CheckoutContainer">
           { orderId !== '' 
            ?
                <div className="orderMade">
                    <div className="buySuccessful">
                        <h1 className="checkoutTitle">SUCCESSFUL PURCHASE</h1>
                        <p className="checkoutSub">Your order has been successfully placed, your order number is: </p>
                        <p className="checkoutOrderNum">{orderId}</p>
                        <p className="checkoutSub">Thank you for shopping with us!</p>
                    </div>
                    <div>
                        <Link className='goShopping' to='/Products'>Go shopping</Link>
                    </div>
                </div>
            :
                <div className="checkout">
                    <h1 className="checkoutTitle">FINISH PURCHASE</h1>
                    <p className="checkoutSub">Please complete with your data</p>
                    <form onSubmit={finalizePurchase} className="checkoutForm">
                        <input onChange={buyerData} type="text" placeholder="Full Name" name="name" required />
                        <input onChange={buyerData} type="tel" placeholder="Phone Number" name="phone" required />
                        <input onChange={buyerData} type="email" placeholder="Email" name="mail" required />
                        <input onChange={((e) => setValidateEmail(e.target.value))} type="email" placeholder="Confirm Your Email" name="mail" required />
                        <button className="submitButton" type="submit" disabled={((validateEmail !== user.mail) || (cart.length === 0)) }>GENERATE ORDER</button>
                        {cart.length === 0 ? (
                            <>
                                <p className="caution">&#9888; You must add items to cart to purchase</p>
                                <Link className='goShoppingCheckout' to='/Products'>Go shopping</Link>
                            </>
                        ) : null }
                    </form>
                </div>
           }
        </div>
        
    )
}
export default Checkout;