import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function Product({data, isReversed, isDetailsPage, isLastChild}) {    
    const [quantity, setQuantity] = useState(1);

    const isSmallScreen =  useMediaQuery('(max-width: 65.25em)');

    const { categoryImage, description, name, category, price, image, slug, cartImage, nameShort } = data;
    const isNew = data.new;

    /* FRAMER MOTION variants */
    const titleVariants = {
        hide: {
            x: isReversed ? -30 : 30,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: 0.5
            }        
        },
        exit: {
            x: isReversed ? -20 : 20,
            opacity: 0
        },
        hideSmall: {
            y: 20,
            opacity: 0
        },
        showSmall: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: 0.5
            }        
        }
    }

    const otherVariants = {
        hide: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.2
            }        
        }
    }

    const wrapperVariants = {
        hide: {
            opacity: 0,
            y: 10
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        },
        exit: {
            opacity: 0,
            y: 10
        }
    }

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
        <section             
            style={{marginBottom: isLastChild && '24.3rem'}} 
            className={`${isReversed && 'reverse'} ${isDetailsPage && 'details'} section-product container mb-160`}>
            {isDetailsPage && <Link to={-1} className="product__btn-back">Go back</Link>}

            <motion.div className="product__wrapper"
                variants={wrapperVariants}
                initial="hide"
                whileInView="show"
                exit="exit"
                viewport={{once: true, amount: 0.5}}
            >
                <picture className="product__img">
                    <source srcSet={isDetailsPage ? image.mobile : categoryImage.mobile} media="(max-width: 34.37em)" />
                    <source srcSet={categoryImage.tablet} media="(max-width: 46.87em)" /> 
                    <source srcSet={isDetailsPage ? image.tablet : categoryImage.tablet} media="(max-width: 65.25em)" />
                    <source srcSet={isDetailsPage ? image.desktop : categoryImage.desktop} media="(min-width: 65.25em)" /> 
                    
                    <img className="product__img" 
                        srcSet={isDetailsPage ? image.desktop : categoryImage.desktop} 
                        src={isDetailsPage ? image.desktop : categoryImage.desktop} 
                        alt={name} />
                </picture>                
            </motion.div>
            <motion.div  
                className={`${isReversed && 'reverse'} product__content`}
                    variants={otherVariants}
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    viewport={{ once: true, amount: 0.5}}
                >
                {isNew && 
                <p className="overline mb-16">new product</p>}

                <motion.h2 className="heading--h2 mb-32"
                    variants={titleVariants}
                    initial={isSmallScreen ? "hideSmall" : "hide"}
                    whileInView={isSmallScreen ? "showSmall" : "show"}
                    exit={!isSmallScreen && "hide"}
                    viewport={{ once: true, amount: 0.5}} 
                    key={isSmallScreen + "h2"}
                >
                    <span>{name.split(' ').slice(0, -1).join(' ')}</span>
                    <span>{name.split(' ')[name.split(' ').length - 1]}</span>
                </motion.h2>
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
            </motion.div>
        </section>
    )
}

export default Product;