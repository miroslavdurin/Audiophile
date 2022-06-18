import React from 'react';
import { Link } from 'react-router-dom';
import './CartModal.scss';
import { useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeAll, removeProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { images } from '../../constants/index';

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
        <div className="cart-modal">
            <div className="container">
                <div className="cart-modal__container">
                    <div className="cart-modal__top mb-32">
                        <h6 className="heading--h6">Cart ({cart.quantity})</h6>
                        <button aria-label="remove button" onClick={()=>dispatch(removeAll())} className="cart-modal__btn-remove">Remove All</button>
                    </div>
                    {   
                        cart.products.length > 0 ?
                        cart.products.map(product=>{
                            return (
                                <div key={product.nameShort} className="cart-modal__product mb-24">
                                    <div className="cart-modal__info">
                                        <img className="cart-modal__img" src={product.cartImage} alt={`${product.name} image`} />
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
                        <img className="cart-modal__empty-cart" src={images.emptyCart} alt="empty cart" />
                    }

                    

                    {/* <div className="cart-modal__product mb-24">
                        <img className="cart-modal__img" src={xx99MarkOneData.cartImage} />
                        <div className="cart-modal__product-details">
                            <div className="cart-modal__product-name">{xx99MarkOneData.nameShort}</div>
                            <div className="cart-modal__product-price">$ {xx99MarkOneData.price}</div>
                        </div>      
                        <div className="cart-modal__quantity-container">
                            <button onClick={handleDecrement} className="cart-modal__btn cart-modal__btn--decrement">-</button>
                            <span className="cart-modal__quantity" > 2 </span>
                            <button onClick={handleIncrement} className="cart-modal__btn cart-modal__btn--increment">+</button>
                        </div>            
                    </div>

                    <div className="cart-modal__product mb-24">
                        <img className="cart-modal__img" src={zx7Data.cartImage} />
                        <div className="cart-modal__product-details">
                            <div className="cart-modal__product-name">{zx7Data.nameShort}</div>
                            <div className="cart-modal__product-price">$ {zx7Data.price}</div>
                        </div>      
                        <div className="cart-modal__quantity-container">
                            <button onClick={handleDecrement} className="cart-modal__btn cart-modal__btn--decrement">-</button>
                            <span className="cart-modal__quantity" > 2 </span>
                            <button onClick={handleIncrement} className="cart-modal__btn cart-modal__btn--increment">+</button>
                        </div>            
                    </div> */}

                    <div className="cart-modal__bottom">
                        <div className="cart-modal__total mb-24">
                            <span>Total</span>
                            <span>$ {cart.total.toLocaleString()}</span>
                        </div>
                        {                        
                            cart.products.length > 0 && <Link to={'/checkout'} className="button">Checkout</Link>
                        }
                    </div>
                </div>
            </div>                
        </div> 
    )
}

export default CartModal