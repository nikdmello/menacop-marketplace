import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './main-menu.styles.scss';

class MainMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [
                {
                    title: 'YZY 350 V2',
                    image: 'https://sneakernews.com/wp-content/uploads/2019/09/adidas-yezy-boost-350-v2-yecheil-0.jpg',
                    id: 'yzy350v2'
                },
                {
                    title: 'YZY 700 V2',
                    image: 'https://cdn.shopify.com/s/files/1/0255/9429/8467/products/Yeezy-700-V2-EF2829-Static_7_28a5c6bc-0a9f-45c7-9fc8-25f1c75e1347_1000x.jpg?v=1565987765',
                    id: 'yzy700v2'
                },
                {
                    title: 'YZY 500',
                    image: 'https://static.highsnobiety.com/thumbor/lZJ2i3yhDuWPzX_OBHM1h2ZZGHc=/fit-in/1000x600/smart/static.highsnobiety.com/wp-content/uploads/2018/07/10112412/adidas-yeezy-500-utility-black-instagram-001.jpg',
                    id: 'yzy500'
                },
                {
                    title: 'YZY 380',
                    image: 'https://yeezymafia.com/content/images/2019/10/YEEZY_BOOST_380_ALIEN.png',
                    size: 'large',
                    id: 'yzy380'
                }
            ]
        }
    }

    render() {
        return (
            <div className='main-menu'>
                {
                    this.state.products.map(({title, image, id, size}) => (
                        <MenuItem key={id} title={title} image={image} size={size}/>
                    ))
                }
            </div>
        );
    }
}

export default MainMenu;