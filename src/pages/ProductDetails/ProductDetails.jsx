import React, {useEffect} from 'react';
import './ProductDetails.scss';
import Navbar from '../../components/Navbar/Navbar';
import Product from '../../components/Product/Product';
import Description from '../../components/Description/Description';
import Gallery from '../../components/Gallery/Gallery';
import OtherProducts from '../../components/OtherProducts/OtherProducts';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import Info from '../../components/Info/Info';
import {data} from '../../constants/index';
import { motion } from 'framer-motion';

function ProductDetails({productId}) {    
    useEffect(()=> { window.scrollTo(0,0) });

    const product = Object.entries(data).find(entry=>entry[1].slug===productId)[1];

    return (
        <>
            <header className="product-details__header">
                <Navbar />
            </header>
            <motion.main
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.7
                    }
                }}
            >
                <Product data={product} isDetailsPage={true}/>
                <Description data={product} />
                <Gallery images={product.gallery} />
                <OtherProducts others={product.others} />
                <Categories />
                <Info />
            </motion.main>
            <Footer />
        </>
    )
}

export default ProductDetails