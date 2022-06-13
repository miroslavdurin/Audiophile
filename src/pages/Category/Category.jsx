import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Product from '../../components/Product/Product';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';
import Categories from '../../components/Categories/Categories';
import './Category.scss';

import {data} from '../../constants/index';

function Category({category}) {    
    const products = Object.entries(data).filter(entry=> entry[1].category === category.toLowerCase()).map(el=> el[1]);

    useEffect(()=> { window.scrollTo(0,0) });

    return (
        <>
            <header className='category__header mb-160'>
                <Navbar />
                <div className="category__title container">
                    <h2 className="heading--h2">{category}</h2>
                </div>
            </header>
            <main>
                {
                    products.map((product, i)=>{
                        return (
                            <Product isLastChild={i===products.length - 1} key={product.name} data={product} isReversed={ i%2 !== 0 }/>
                        )
                    })
                }
                <Categories />
                {/*  <Product data={xx99MarkTwoData} />
                <Product data={xx99MarkOneData} isReversed={true} />
                <Product data={zx7Data} />
                <Product data={zx9Data} isReversed={true} /> */}
                <Info />
            </main>
            <Footer />
        </>        
    )
}

export default Category;