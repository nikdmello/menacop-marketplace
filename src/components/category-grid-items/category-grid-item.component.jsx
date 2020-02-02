import React from 'react';
import { withRouter } from 'react-router-dom';
import './category-grid-item.styles.scss';

const CategoryItem = ({title, image, size, shoptag, route, history, match}) => (
    <div className={`${size} category-item`} onClick={() => history.push(`${match.url}${route}`)}>
         <div className='product-image' style={{backgroundImage: `url(${image})`}}/>
         <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='shop-tag'>{shoptag}</span>
        </div>
    </div>
);

export default withRouter(CategoryItem);