import React from 'react';
import Item from '../Item/index';
import './index.css'

const ItemList = ({ listProducts }) => {
    return (
        <div className='ListContainer'>
            {listProducts.map((products) => (
                <Item key={products.id} product={products} />
            ))}
        </div>
    );
};

export default ItemList;
