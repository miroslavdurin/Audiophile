import React from 'react';
import './OtherProducts.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function OtherProducts({others}) {

    /* FRAMER MOTION variants */
    const contentVariants = {
        hide: {
            opacity: 0,
            y: 20
        },
        show: {
            opacity: 1,
            y:0,
            transition: {
                duration: 1
            }
        }
    }
   
    return (
        <section className="section-other-products container mb-240">
            <h3 className="heading--h3 mb-64">
                You may also like
            </h3>
            <div className="products__container">
                {
                    others.map((product, i)=>{
                        return (
                            <div key={product.slug} className="products__product">
                                <motion.picture className="products__img mb-40"
                                    initial={{
                                        opacity: 0,
                                        rotateY: '-180deg'
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        rotateY: 0,
                                        transition:{
                                            duration: 1,
                                            delay: i * 0.1
                                        }
                                    }}
                                    viewport={{once: true}}
                                >
                                    <source srcSet={product.image.mobile} media="(max-width: 34.37em)" />
                                    <source srcSet={product.image.tablet} media="(max-width: 46.87em)" />
                                    <source srcSet={product.image.desktop} media="(min-width: 65.25em)" />                                     
                                    <img src={product.image.desktop} srcSet={product.image.desktop} alt="product" className="products__img mb-40" />
                                </motion.picture>
                                <motion.div
                                    variants={contentVariants}
                                    initial="hide"
                                    whileInView="show"
                                    viewport={{once: true}}
                                >
                                    <h5 className="heading--h5 mb-32">{product.name}</h5>
                                    <Link to={`/product/${product.slug}`} className="button">See Product</Link>  
                                </motion.div>                                
                            </div>
                        )                        
                    })
                }
            </div>
        </section>
    )
}

export default OtherProducts;