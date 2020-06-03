import React from 'react';


const ProductItems = ({ item }) => (
    <div className="product--item">
        <div className={item.productCost, item.filter}>
            <img className="product--img" src={item.img} alt={item.alt} />
            <h3>{item.title}</h3>
            <p className="product--price">${item.price}</p>
            <p>{item.description}</p>
            <button className="productsButton">Add to Cart</button>
        </div>
    </div>

);
export default ProductItems;