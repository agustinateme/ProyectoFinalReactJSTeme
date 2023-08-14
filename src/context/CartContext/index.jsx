import React, { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    
    //Agrega un producto al carrito con la cantidad indicada.
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prevCart => [...prevCart, { ...item, quantity }]);
        } else {
            setCart(prevCart =>
                prevCart.map(product =>
                    product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
                )
            );
        }
    };

    //Disminuye en 1 la cantidad de un producto en el carrito. PRE: el item existe en el carrito
    const lessItem = (item) => {
        setCart(prevCart =>
            prevCart.map(product =>
                product.id === item.id ? { ...product, quantity: product.quantity - 1} : product
            )
        );
    };

    //Aumenta en 1 la cantidad de un producto en el carrito. PRE: el item existe en el carrito
    const moreItem = (item) => {
        setCart(prevCart =>
            prevCart.map(product =>
                product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
            )
        );
    };

    //Limpia todo el carrito, eliminando todos los productos.
    const clear = () => {
        setCart([])
    }

    //Verifica si un producto ya está en el carrito.
    const isInCart = (id) => {
        return cart.some((item)=> item.id === id)
    }

    //Elimina un producto del carrito por su ID.
    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    //Calcula la cantidad total de productos en el carrito.
    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    //Obtiene la cantidad de un producto específico en el carrito por su ID.
    const getQuantity = (id) => {
        const itemInCart = cart.find((item) => item.id === id).quantity;
        return itemInCart;
    };

    //Calcula el total de la compra considerando las cantidades y precios de los productos en el carrito.
    const total = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, deleteItem, cartQuantity, total, lessItem, moreItem, getQuantity, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

