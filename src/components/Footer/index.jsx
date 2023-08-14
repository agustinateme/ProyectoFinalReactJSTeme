import React from "react";
import './index.css';
/*
import { db } from "../../services/firebase/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState, useContext } from "react";
*/
function Footer() { 
    /*
    const [orderId, setOrderId] = useState('')
    const [user, setUser] = useState({})

    const datosEmail = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const subscribeEmail = (e) => {
        e.preventDefault()
        let order = { user, date: serverTimestamp()}
        const emailsuscripto = collection(db, 'newsletterSubscriptionEmail')
        addDoc(emailsuscripto, order)
        .then((res) => {
            setOrderId(res.id);
        })
        .catch((error) => console.log(error))
    }

console.log(orderId, user)
*/
    return (
        <div className="FooterContainer">
            <div className="Subscribe">
                <form  /*  onSubmit={subscribeEmail}  */>
                    <input  /* onChange={datosEmail}  */ type="email" id="email" name="email" required placeholder="Enter your email address" />
                    <button type="submit" className="btnSubs">SUBSCRIBE</button>
                </form>
            </div>
            <div className="SocialMedia">
                <p> FOLLOW US ON OUR SOCIAL NETWORKS</p>
                <div className="SocialLinks">
                    <a href="https://es-la.facebook.com/" target="_blank">
                        <img src="/facebook.png" alt="facebook" className="socialIcon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="/instagram.png" alt="facebook" className="socialIcon" />
                    </a>
                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img src="/whatsapp.png" alt="facebook" className="socialIcon" />
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <img src="/twitter.png" alt="facebook" className="socialIcon" />
                    </a>
                    </div>
            </div>
        </div>
    )
}
export default Footer;