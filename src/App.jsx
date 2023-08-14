import React, { useEffect } from 'react';
import ItemListContainer from './components/ItemListContainer/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/index';
import Footer from './components/Footer/index';
import Home from './pages/Home/index';
import Cart from './components/Cart/index';
import Checkout from './components/Checkout/index'
import './App.css';

import { CartProvider } from './context/CartContext/index'

function App() {
    return (
        <>
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/Products' element={<ItemListContainer greeting={'All the products'} />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/category/subcategory/:subcategory' element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                </Routes>
                <Footer />
            </CartProvider>
        </BrowserRouter>
        </>    
    );
}

export default App;