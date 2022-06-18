import React from 'react';
import './OtherProducts.scss';
import { Link } from 'react-router-dom';

function OtherProducts({others}) {
   
    return (
        <section className="section-other-products container mb-240">
            <h3 className="heading--h3 mb-64">
                You may also like
            </h3>
            <div className="products__container">
                {
                    others.map(product=>{
                        return (
                            <div key={product.slug} className="products__product">
                                <picture className="products__img mb-40">
                                    <source srcSet={product.image.mobile} media="(max-width: 34.37em)" />
                                    <source srcSet={product.image.tablet} media="(max-width: 46.87em)" />
                                    <source srcSet={product.image.desktop} media="(min-width: 65.25em)" /> 
                                    
                                    <img src={product.image.desktop} srcSet={product.image.desktop} alt="product image" className="products__img mb-40" />
                                </picture>
                                {/* <img src={product.image.desktop} alt={product.name} className="products__img mb-40" /> */}
                                <h5 className="heading--h5 mb-32">{product.name}</h5>
                                <Link to={`/product/${product.slug}`} className="button">See Product</Link>
                            </div>
                        )                        
                    })
                }
            </div>
        </section>
    )
}

export default OtherProducts;