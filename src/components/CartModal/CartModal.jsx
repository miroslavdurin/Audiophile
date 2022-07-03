import React from 'react';
import { Link } from 'react-router-dom';
import './CartModal.scss';
import { useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeAll, removeProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { images } from '../../constants/index';
import { motion } from 'framer-motion';

function CartModal() {
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();

    function handleIncrement(e) {
        dispatch(increaseQuantity({ name: e.target.dataset.name}))        
    }

    function handleDecrement(e) {
        if(+e.target.dataset.productQuantity > 1) dispatch(decreaseQuantity({ name: e.target.dataset.name}))
        else dispatch(removeProduct({name: e.target.dataset.name}))
    }

    return (
        <motion.div className="cart-modal"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0 }}
        >
            <motion.div className="container"
                initial={{
                    maxHeight: 0
                }}

                animate={{
                    maxHeight: '90vh',
                    transition: {
                        duration: 0.7,
                    }
                }}
            >
                <div className="cart-modal__container">
                    <div className="cart-modal__top mb-32">
                        <h6 className="heading--h6">Cart ({cart.quantity})</h6>
                        <button aria-label="remove" onClick={()=>dispatch(removeAll())} className="cart-modal__btn-remove">Remove All</button>
                    </div>
                    {   
                        cart.products.length > 0 ?
                        cart.products.map(product=>{
                            return (
                                <div key={product.nameShort} className="cart-modal__product mb-24">
                                    <div className="cart-modal__info">
                                        <img className="cart-modal__img" src={product.cartImage} alt={product.name} />
                                        <div className="cart-modal__product-details">
                                            <div className="cart-modal__product-name">{product.nameShort}</div>
                                            <div className="cart-modal__product-price">$ {product.price.toLocaleString()}</div>
                                        </div>       
                                    </div>                                       
                                    <div className="cart-modal__quantity-container">
                                        <button aria-label="decrease quantity" onClick={handleDecrement} data-product-quantity={product.quantity} data-name={product.name} className="cart-modal__btn cart-modal__btn--decrement">-</button>
                                        <span className="cart-modal__quantity" > {product.quantity} </span>
                                        <button aria-label="increase quantity" onClick={handleIncrement} data-name={product.name} className="cart-modal__btn cart-modal__btn--increment">+</button>
                                    </div>            
                                </div>
                            )
                        })
                        :
                        <motion.img className="cart-modal__empty-cart" 
                            src={images.emptyCart} 
                            alt="empty cart" 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                        />
                    }                
                    <div className="cart-modal__bottom">
                        <div className="cart-modal__total mb-24">
                            <span>Total</span>
                            <span>$ {cart.total.toLocaleString()}</span>
                        </div>
                        {                        
                            cart.products.length > 0 && <Link aria-label="checkout page" to={'/checkout'} className="button button--medium">Checkout</Link>
                        }
                    </div>
                </div>
            </motion.div>                
        </motion.div> 
    )
}

export default CartModal