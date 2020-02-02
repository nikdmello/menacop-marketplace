import React from 'react';
import './product.styles.scss';

const Product = ({name, price, imageUrl}) => (
    <div className='product'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='details'>
            <div className='name'>{name}</div>
            <div className='price'>{price}</div>
        </div>
    </div>
);

export default Product;