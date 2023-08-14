import React from "react";
import { useState, useEffect } from "react"
import ItemList from '../ItemList/index'
import './index.css'
import Loader from '../Loading/index'
import { useParams } from "react-router-dom";
/*
import { useParams } from 'react-router-dom'
*/
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [subcategoryProducts, setSubcategoryProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId, subcategory } = useParams();

    useEffect(() => {
        setLoading(true);
        const collectionProducts = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');
        getDocs(collectionProducts)
            .then((res) => {
                const list = res.docs.map((product) => ({
                    id: product.id,
                    ...product.data()
                }));
                setCategoryProducts(list);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    useEffect(() => {
        setLoading(true);
        const collectionProducts2 = subcategory
            ? query(collection(db, 'products'), where('subcategory', '==', subcategory))
            : collection(db, 'products');
        getDocs(collectionProducts2)
            .then((res) => {
                const list = res.docs.map((product) => ({
                    id: product.id,
                    ...product.data()
                }));
                setSubcategoryProducts(list);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [subcategory]);

    // Lógica para mostrar los productos según la categoría o subcategoría seleccionada
    const displayedProducts = subcategory ? subcategoryProducts : categoryProducts;
    return (
        <div className="ItemListContainer">
            {
                loading ? <Loader />
                    : <div>
                        <h1>{greeting}</h1>
                        <ItemList listProducts={displayedProducts} />
                    </div>
            }
        </div>
    )
}

export default ItemListContainer;