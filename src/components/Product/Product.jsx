import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';


function Product({data, isReversed, isDetailsPage, isLastChild}) {    
    const [quantity, setQuantity] = useState(1);

    const cart = useSelector(state=>state.cart);   

    const { categoryImage, description, name, category, price, image, slug, cartImage, nameShort } = data;
    const isNew = data.new;

    const product = {
        cartImage,
        category,
        name,
        nameShort,
        price
    }

    const dispatch = useDispatch();   

    function handleChange(e) {
        setQuantity(e.target.value)
    }

    function handleIncrement(e){
        e.preventDefault();
        setQuantity(quantity + 1);
    }

    function handleDecrement(e) {
        e.preventDefault()
        if(quantity === 1) return;
        setQuantity(quantity - 1);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(addProduct({
            product,
            quantity
        }))        
    }

    return (
        <section style={{marginBottom: isLastChild && '24.3rem'}} className={`${isReversed && 'reverse'} ${isDetailsPage && 'details'} section-product container mb-160`}>
            {isDetailsPage && <Link to={-1} className="product__btn-back">Go back</Link>}

            <div className="product__wrapper">
                <picture className="product__img">
                    <source srcSet={isDetailsPage ? image.mobile : categoryImage.mobile} media="(max-width: 34.37em)" />
                    <source srcSet={categoryImage.tablet} media="(max-width: 46.87em)" /> 
                    <source srcSet={isDetailsPage ? image.tablet : categoryImage.tablet} media="(max-width: 65.25em)" />
                    <source srcSet={isDetailsPage ? image.desktop : categoryImage.desktop} media="(min-width: 65.25em)" /> 
                    
                    <img className="product__img" srcset={isDetailsPage ? image.desktop : categoryImage.desktop} src={isDetailsPage ? image.desktop : categoryImage.desktop} alt={name + ' image'} />
                </picture>                
            </div>
            <div className={`${isReversed && 'reverse'} product__content`}>
                {isNew && <p className="overline mb-16">new product</p>}
                <h2 className="heading--h2 mb-32">
                    <span>{name.split(' ').slice(0, -1).join(' ')}</span>
                    <span>{name.split(' ')[name.split(' ').length - 1]}</span>
                </h2>
                <p className={`paragraph ${isDetailsPage ? 'mb-32 details' : 'mb-40'}`}>{description}</p>

                { isDetailsPage ?   
                    <>
                        <p className="product__price mb-48">$ {(price*quantity).toLocaleString()}</p>                        
                        <form onSubmit={handleSubmit} className="product__form">
                            <div className="product__input-container">
                                <button aria-label="decrease quantity" onClick={handleDecrement} className="product__btn product__btn--decrement">-</button>                                
                                <input id="quantity" onChange={handleChange} value={quantity} type="text" className="product__quantity" />
                                <button aria-label="increase quantity" onClick={handleIncrement} className="product__btn product__btn--increment">+</button>
                            </div>
                            <button aria-label="submit" type="submit" className="button">Add to cart</button>
                        </form>
                    </>                                     
                    :
                    <Link to={`/product/${slug}`} className="button">See product</Link>                
                }
            </div>
        </section>
    )
}

export default Product;