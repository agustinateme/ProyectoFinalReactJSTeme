import React from "react";
import { useState } from 'react';
import './index.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    //Creo un estado del contador
    const [count, setCount] = useState(initial);

    //Resto en el contador, si es menor a 0 no tiene efecto
    const remove = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    //Sumo en el contador, si es mayor al stock no tiene efecto
    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    //Le pasa a la función onAdd de itemDetail la cantidad que quiero agregar de un item, además setea el contador a 0 luego de agregar
    const handleBuyClick = () => {
        if (count > 0) {
            onAdd(count);
            setCount(0);
        }
    };

    return (
        <>
            <div className="CountContainer">
                {stock === 0 ? (
                    <p className='notAvaible'>NOT AVAILABLE</p>
                ) : (
                    <>
                        <div className="Count">
                            <button className="Count--btn" onClick={remove}>
                                -
                            </button>
                            <span className="Count--cant">
                                {count}
                            </span>
                            <button className="Count--btn" onClick={add}>
                                +
                            </button>
                        </div>
                            <button className="CountBuy" disabled={count === 0} onClick={handleBuyClick}>
                            BUY
                        </button>
                    </>
                )}
            </div>
        </>
    );
}

export default ItemCount;