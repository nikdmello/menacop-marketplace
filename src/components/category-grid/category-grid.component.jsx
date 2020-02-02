import React from 'react';
import './category-grid.styles.scss';
import CategoryItem from '../category-grid-items/category-grid-item.component';

class CategoryGrid extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [
                {
                    title: 'YZY 350 V2',
                    image: 'https://i.ibb.co/7SS7FbY/category-grid-yeezy-350-v2.jpg',
                    size: 'med',
                    shoptag: '"SHOP NOW"',
                    id: 'yzy350v2',
                    route: 'adidas-yeezy-boost-350-v2'
                },
                {
                    title: 'YZY 700 V2',
                    image: 'https://i.ibb.co/hXrYrMy/category-grid-yeezy-700-v2.jpg',
                    size: 'med',
                    shoptag: '"SHOP NOW"',
                    id: 'yzy700v2',
                    route: 'adidas-yeezy-boost-700-v2'
                },
                {
                    title: 'YZY 500',
                    image: 'https://i.ibb.co/6RTHKJr/category-grid-yeezy-500.jpg',
                    size: 'med',
                    shoptag: '"SHOP NOW"',
                    id: 'yzy500',
                    route: 'adidas-yeezy-boost-500'
                },
                {
                    title: 'YZY 380',
                    image: 'https://i.ibb.co/31S8r15/category-grid-yeezy-380.png',
                    size: 'large',
                    shoptag: '"RELEASING SOON"',
                    id: 'yzy380',
                    route: 'adidas-yeezy-boost-380'
                }
            ]
        }
    }

    render() {
        return (
            <div className='category-grid'>
                {
                    this.state.products.map(({title, image, id, size, shoptag, route}) => (
                        <CategoryItem key={id} title={title} image={image} size={size} shoptag={shoptag} route={route}/>
                    ))
                }
            </div>
        );
    }
}

export default CategoryGrid;