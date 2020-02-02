import React from 'react';
import './category-all-products.styles.scss';
import Product from '../product/product.component';

const CategoryProducts = ({ title, products }) => (
    <div className='category-container'>
        <h1 className='category-title'>{title}</h1>
        <div className='product-group'> 
        {products.map(({id, ...otherItemProps}) => (
        <Product key={id} {...otherItemProps}/>
        ))}
        </div>
    </div>
);

export default CategoryProducts;