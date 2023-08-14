import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Item = ({ product }) => {
    const { id, name, brand, price, image1, image2, stock } = product;

    //Estado para almacenar la imagen actual que se muestra.
    const [currentImage, setCurrentImage] = useState(image1);

    //Función que se ejecuta cuando el mouse entra en la imagen.
    //Cambia la imagen actual a la segunda imagen.
    const handleMouseEnter = () => {
        setCurrentImage(image2);
    };

    //Función que se ejecuta cuando el mouse sale de la imagen.
    //Restaura la imagen actual a la primer imagen.
    const handleMouseLeave = () => {
        setCurrentImage(image1);
    };

    return (
        <div className='productContainer'>
            <img src={currentImage} alt={name} className='productImg' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            <div className='productInfo'>
                <p className='productInfo--brand'>{brand}</p>
                <p className='productInfo--name'>{name}</p>
                <p className='productInfo--price'>${price}</p>
                {stock === 0 ? (
                    <p className='productInfo--stock'>NOT AVAILABLE</p>
                ) : (
                    <p className='productInfo--stock'>Stock: {stock}</p>
                )}
                <Link to={`/item/${id}`} className='btnn'>
                    <button className='productBtn'>SEE MORE</button>
                </Link>
            </div>     
        </div>
    )
};

export default Item;