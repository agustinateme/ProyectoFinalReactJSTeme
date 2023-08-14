import React from "react";
import Banner from '../../components/Banner/index'
import ItemCategory from '../../components/ItemCategory/index'
import { Link } from 'react-router-dom';
import NewInStoreContainer from '../../components/NewInStore/index'
import './index.css'

function Home() {
    return (
        <div>
            <Banner />
            <p className="categoriesItems">CATEGORIES</p>
            <div className="CategoryContainer">
                <Link className='link' to="/category/Skyn-Care">
                    <ItemCategory backgroundImage="/skyn-care.jpg" nameCategory={'SKYN CARE'} />
                </Link>
                <Link className='link' to="/category/Hair-Care">
                    <ItemCategory backgroundImage="/hair-care.jpg" nameCategory={'HAIR CARE'} />
                </Link>
                <Link className='link' to="/category/Body-Care">
                    <ItemCategory backgroundImage="/body-care.jpg" nameCategory={'BODY CARE'} />
                </Link>
                <Link className='link' to="/category/Health-and-Wellness">
                    <ItemCategory backgroundImage="/health.jpg" nameCategory={'HEALTH & WELLNESS'} />
                </Link>
            </div>
            <p className="newitems">FEATURED PRODUCTS</p>
            <div className="ItemListContainer">
                <NewInStoreContainer />
            </div>
        </div>
    )
}
export default Home;