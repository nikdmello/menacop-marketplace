import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, image, size, shoptag}) => (
    <div className={`${size} menu-item`}>
         <div className='product-image' style={{backgroundImage: `url(${image})`}}/>
         <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='shop-tag'>{shoptag}</span>
        </div>
    </div>
);

export default MenuItem;