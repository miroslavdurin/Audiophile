import React, {useState} from 'react';
import './FinishedOrder.scss';
import { icons } from '../../constants/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function FinishedOrder() {
      
    const cart = useSelector(state=>state.cart);

    const [isAllProducts, setIsAllProducts] = useState(false);

    return (
        <div className="finished-order">
            <motion.div layout className="finished-order__container"
                initial={{opacity: 0}}
                animate={{opacity: 1,
                transition: {
                    duration: 0.8
                }
            }}
            >
                <div className="finished-order__text-content">
                    <img className="mb-32" src={icons.iconMark} alt="Mark icon" />
                    <h3 className="heading--h3 mb-24">Thank you for your order</h3>
                    <p className="paragraph mb-32">You will receive an email confirmation shortly</p>
                </div>
                <div className="finished-order__products-container mb-48">
                    <motion.div className={`finished-order__products ${cart.products.length > 0 && isAllProducts && 'scrollbar'}`}>
                        {
                            isAllProducts ? 

                            <>
                                {
                                    cart.products.map((product, i)=>{
                                        return (
                                            <div key={product.name} className={`summary__product-info ${ i === cart.products.length - 1 ? '0' : 'mb-24'}`}>
                                                <img className="summary__img" src={product.cartImage} />
                                                <div className="summary__product-details">
                                                    <div className="summary__product-name">{product.nameShort}</div>
                                                    <div className="summary__price">$ {product.price.toLocaleString()}</div>
                                                </div>                    
                                                <div className="summary__quantity">×{product.quantity}</div>
                                            </div>
                                        )
                                    })
                                }
                                <button onClick={()=>setIsAllProducts(false)} className="finished-order__btn">View less</button>
                            </>
                            :
                            <>                          
                                <div className={`summary__product-info`}>
                                    <img className="summary__img" src={cart.products[0].cartImage} />
                                    <div className="summary__product-details">
                                        <div className="summary__product-name">{cart.products[0].nameShort}</div>
                                        <div className="summary__price">$ {cart.products[0].price.toLocaleString()}</div>
                                    </div>                    
                                    <div className="summary__quantity">×{cart.products[0].quantity}</div>
                                </div>
                                { cart.products.length > 1 && <button onClick={()=>setIsAllProducts(true)} className="finished-order__btn">And {cart.products.length - 1} more item(s)</button> }
                            </>
                        }
                        
                    </motion.div>
                    <div className="finished-order__total">
                        <span className="mb-8">Grand Total</span> 
                        <span>$ {cart.grandTotal.toLocaleString()}</span>
                    </div>
                </div>
                <Link to="/" className="button button--big">Back to home</Link>
            </motion.div>
            <motion.div className="finished-order__overlay" 
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{
                    duration:0.7
                }}
            />
        </div>
    )
}

export default FinishedOrder