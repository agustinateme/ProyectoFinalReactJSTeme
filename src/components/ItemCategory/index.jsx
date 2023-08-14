import React from "react";
import './index.css'

function ItemCategory({ backgroundImage, nameCategory }) {
    const containerStyle = {
        background: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="ItemCategoryContainer" style={containerStyle}>
            <p className="ItemCategoryInfo">
                {nameCategory}
            </p>
        </div>
    );
}

export default ItemCategory;