import React from 'react';
import SNEAKERS_LIST from './shop-sneakers.data';
import CategoryProducts from '../../components/category-all-products/category-all-products.component';
import './shop-sneakers.styles.scss';

class ShopSneakers extends React.Component {
    constructor() {
        super();

        this.state = {
            categories: SNEAKERS_LIST
        };
    }

    render() {
         return (<div className='category-page'> {
                this.state.categories.map(({ id, ...otherCollectionProps }) => (
                    <CategoryProducts key={id} {...otherCollectionProps}/>
                ))}
                </div>
        );
    }
}
 
export default ShopSneakers;