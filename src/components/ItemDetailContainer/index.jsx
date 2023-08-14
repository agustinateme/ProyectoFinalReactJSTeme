import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/index';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import Loader from '../Loading/index';
import './index.css'

const ItemDetailContainer = () => {
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const productDoc = doc(db, 'products', id);
                const productSnapshot = await getDoc(productDoc);
                if (productSnapshot.exists()) {
                    setProductDetails({ id: productSnapshot.id, ...productSnapshot.data() });
                } else {
                    console.log('No se encontraron detalles para este producto.');
                }
            } catch (error) {
                console.error('Error obteniendo los detalles del producto:', error);
            } finally {
                setLoading(false);
            }
        };

        getProductDetails();
    }, [id]);

    return (
        <div className="itemDetailContainer">
            {loading ? (
                <Loader />
            ) : productDetails ? (
                <ItemDetail product={productDetails} />
            ) : (
                <p>No se encontraron detalles para este producto.</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;