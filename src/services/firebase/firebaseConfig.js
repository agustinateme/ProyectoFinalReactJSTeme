import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA06D7Kcs3ycfmHfCp4GUWB4d1GtMwnfpw",
    authDomain: "trinity-ecommerce-f75e9.firebaseapp.com",
    projectId: "trinity-ecommerce-f75e9",
    storageBucket: "trinity-ecommerce-f75e9.appspot.com",
    messagingSenderId: "498575604176",
    appId: "1:498575604176:web:0e1d3609f8cbf94bbd61d5"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)