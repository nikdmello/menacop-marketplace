import React from 'react';
import './category-grid.styles.scss';
import CategoryItem from '../category-item/category-item.component';

class CategoryGrid extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [
                {
                    title: 'YZY 350 V2',
                    image: 'https://sneakernews.com/wp-content/uploads/2019/09/adidas-yezy-boost-350-v2-yecheil-0.jpg',
                    size: 'med',
                    shoptag: '"SHOP NOW"',
                    id: 'yzy350v2',
                    route: 'adidas-yeezy-boost-350-v2'
                },
                {
                    title: 'YZY 700 V2',
                    image: 'https://cdn.shopify.com/s/files/1/0255/9429/8467/products/Yeezy-700-V2-EF2829-Static_7_28a5c6bc-0a9f-45c7-9fc8-25f1c75e1347_1000x.jpg?v=1565987765',
                    size: 'med',
                    shoptag: '"SHOP NOW"',
                    id: 'yzy700v2',
                    route: 'adidas-yeezy-boost-700-v2'
                },
                {
                    title: 'YZY 500',
                    image: 'https://static.highsnobiety.com/thumbor/lZJ2i3yhDuWPzX_OBHM1h2ZZGHc=/fit-in/1000x600/smart/static.highsnobiety.com/wp-content/uploads/2018/07/10112412/adidas-yeezy-500-utility-black-instagram-001.jpg',
                    size: 'med',
                    shoptag: '"SHOP NOW"',
                    id: 'yzy500',
                    route: 'adidas-yeezy-boost-500'
                },
                {
                    title: 'YZY 380',
                    image: 'https://yeezymafia.com/content/images/2019/10/YEEZY_BOOST_380_ALIEN.png',
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