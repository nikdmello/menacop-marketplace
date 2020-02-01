import React from 'react';
import './homepage.styles.scss';

import CategoryGrid from '../../components/category-grid/category-grid.component';

const HomePage = () => (
    <div className='home-page'>
        <CategoryGrid/>
    </div>
);

export default HomePage;