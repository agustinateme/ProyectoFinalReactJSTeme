import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/index';
import './index.css';
import Loader from '../Loading/index';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const NewInStoreContainer = ({ greeting }) => {
    const [newInStoreProducts, setNewInStoreProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const newInStoreQuery = query(collection(db, 'products'), where('newInStore', '==', true));
        getDocs(newInStoreQuery)
            .then((res) => {
                const list = res.docs.map((product) => ({
                    id: product.id,
                    ...product.data()
                }));
                setNewInStoreProducts(list);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="NewInStoreContainer">
            {
                loading ? <Loader />
                    : <div>
                        <h1>{greeting}</h1>
                        <ItemList listProducts={newInStoreProducts} />
                    </div>
            }
        </div>
    );
};

export default NewInStoreContainer;
