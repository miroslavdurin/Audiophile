import React, {useState, useEffect} from 'react';
import './Checkout.scss';
import FinishedOrder from '../FinishedOrder/FinishedOrder';
import { icons, images } from '../../constants/index';
import {useForm} from "react-hook-form";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    nameValidators, 
    emailValidators, 
    phoneNumberValidators, 
    adressValidators, 
    zipCodeValidators, 
    cityNameValidators, 
    countryNameValidators,
    eMoneyNumberValidators,
    eMoneyPinValidators,
} from '../../helpers/validators';
import { motion } from 'framer-motion';

function Checkout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { register, handleSubmit, setValue, watch, trigger, formState:{errors, isValidating} } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange'
    });


    const cart = useSelector(state=>state.cart);

    const payMethod = watch("payment") || "eMoney";
    
    useEffect(()=>{
        setValue("payment", "eMoney")

        window.addEventListener('click', e=>{
            if(e.target.closest('.button')) return;
            if(!e.target.closest('.finished-order__container')) setIsModalOpen(false);
        })
    }, [])

    function handleEMoney() {
        setValue("payment", "eMoney");
    }

    function handleCash() {
        setValue("payment", "cash");
        setValue("eMoneyNumber", ""); 
        setValue("eMoneyPin", "");
    }

    return (
        <section className="section-checkout container">
            { isModalOpen && <FinishedOrder />}
            <Link className="checkout__btn-back" to={-1}>Go Back</Link>
            <div layout transition="linear" className="checkout">
                <h3 className="heading--h3 mb-40">Checkout</h3>
                <form id="checkout-form" 
                    onSubmit={handleSubmit((data)=>setIsModalOpen(true))} 
                    autoComplete='off' 
                    action="/" 
                    className="form">
                    <div className="checkout__billing">
                        <h6 className="subtitle mb-16">Billing details</h6> 
                        <div className="checkout__form-container">
                            <div className={`form__group form__group--half-size ${errors.name?.message && 'error'}`}>
                                <label htmlFor="name" className="form__label">Name</label>
                                <p className="form__error-message">{errors.name?.message}</p>
                                <input onFocus={()=> trigger("name")} id="name" {...register("name", {...nameValidators} )} 
                            type="text" className={`form__input ${!errors.name?.message && 'valid'}`} placeholder="Alexei Ward" />
                            </div>
                            <div className={`form__group form__group--half-size ${errors.email?.message && 'error'}`}>
                                <label htmlFor="email" className="form__label">Email Adress</label>
                                <p className="form__error-message">{errors.email?.message}</p>
                                <input onFocus={()=>trigger('email')} id="email" {...register("email", {...emailValidators} )} 
                                    type="text" 
                                    className={`form__input ${!errors.email?.message && 'valid'}`}
                                    placeholder="alexei@mail.com" />
                            </div>
                            <div className={`form__group form__group--half-size ${errors.phone?.message && 'error'}`}>
                                <label htmlFor="phone" className="form__label">Phone Number</label>
                                <p className="form__error-message">{errors.phone?.message}</p>
                                <input 
                                    id="phone" 
                                    onFocus={()=>trigger('phone')}
                                    {...register("phone", {...phoneNumberValidators}) } 
                                    type="number" className={`form__input ${!errors.phone?.message && 'valid'}`} placeholder="+1 202-555-0136" />
                            </div>  
                        </div>                                            
                    </div>

                    <div className="checkout__shipping">
                        <h6 className="subtitle mb-16">Shipping info</h6> 
                        <div className="checkout__form-container">
                            <div className={`form__group form__group--full-size ${errors.adress?.message && 'error'}`}>
                                <label htmlFor="adress" className="form__label">Adress</label>
                                <p className="form__error-message">{errors.adress?.message}</p>
                                <input 
                                    onFocus={()=> trigger("adress")}
                                    id="adress"  
                                    {...register("adress", {...adressValidators}) }
                                    type="text" 
                                    className={`form__input ${!errors.adress?.message && 'valid'}`} 
                                    placeholder="1137 Williams Avenue" />
                            </div>
                            <div className={`form__group form__group--half-size ${errors.zip?.message && 'error'}`}>
                                <label htmlFor="zip" className="form__label">ZIP code</label>
                                <p className="form__error-message">{errors.zip?.message}</p>
                                <input 
                                    onFocus={()=> trigger("zip")}
                                    id="zip" 
                                    {...register("zip", {...zipCodeValidators}) } 
                                    type="number" 
                                    className={`form__input ${!errors.zip?.message && 'valid'}`} 
                                    placeholder="10000" />
                            </div>

                            <div className={`form__group form__group--half-size ${errors.city?.message && 'error'}`}>
                                <label htmlFor="city" className="form__label">City</label>
                                <p className="form__error-message">{errors.city?.message}</p>
                                <input 
                                    onFocus={()=> trigger("city")}
                                    id="city" 
                                    {...register("city", {...cityNameValidators}) }  
                                    type="text" 
                                    className={`form__input ${!errors.city?.message && 'valid'}`} 
                                    placeholder="New York" />
                            </div>  
                            <div className={`form__group form__group--half-size ${errors.country?.message && 'error'}`}>
                                <label htmlFor="country" className="form__label">Country</label>
                                <p className="form__error-message">{errors.country?.message}</p>                             
                                <input 
                                    onFocus={()=> trigger("country")}
                                    id="country" 
                                    {...register("country", {...countryNameValidators}) }   
                                    type="text" 
                                    className={`form__input ${!errors.country?.message && 'valid'}`} 
                                    placeholder="United States" />
                            </div>  
                        </div>                                            
                    </div>

                    <div className="checkout__payment">
                        <h6 className="subtitle mb-16">Payment details</h6> 
                        <div className="checkout__payment-container mb-24">
                            <h6 className="form__label checkout__title">Payment method</h6>

                            <div onClick={handleEMoney} className={`form__radio-group mb-16 ${payMethod === 'eMoney' && 'selected'}`}>
                                <input 
                                    readOnly                               
                                    {...register("payment")}
                                    checked={payMethod==='eMoney'}
                                    id='emoney' 
                                    type="radio" 
                                    className="form__radio-input" />
                                <label className="form__radio-label" htmlFor="emoney">
                                    <span className="form__radio-btn" />
                                    e-Money
                                </label>
                            </div>

                            <div onClick={handleCash} className={`form__radio-group ${payMethod === 'cash' && 'selected'}`}>
                                <input 
                                    readOnly 
                                    {...register("payment")}           
                                    checked={payMethod==="cash"}
                                    id='delivery' 
                                    type="radio" 
                                    className="form__radio-input" />
                                <label className="form__radio-label" htmlFor="delivery">
                                    <span className="form__radio-btn" />
                                    Cash on Delivery
                                </label>
                            </div>
                        </div>

                        { payMethod === "eMoney" &&
                            <>
                                <motion.div className="checkout__form-container"
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    exit={{opacity:0}}
                                >
                                    <div className={`form__group form__group--half-size ${errors.eMoneyNumber?.message && 'error'}`}>
                                        <label htmlFor="eMoneyNumber" className="form__label">e-Money Number</label>
                                        <p className="form__error-message">{errors.eMoneyNumber?.message}</p>                              
                                        <input 
                                            onFocus={()=> trigger("enumber")}
                                            id="eMoneyNumber" 
                                            {...register("eMoneyNumber", {...eMoneyNumberValidators}) }   
                                            type="number" 
                                            className={`form__input ${!errors.eMoneyNumber?.message && 'valid'}`} 
                                            placeholder="238521993" />
                                    </div>
                                    <div className={`form__group form__group--half-size ${errors.eMoneyPin?.message && 'error'}`}>
                                        <label htmlFor="eMoneyPin" className="form__label">e-Money PIN</label>
                                        <p className="form__error-message">{errors.eMoneyPin?.message}</p>                               
                                        <input 
                                            onFocus={()=> trigger("epin")}
                                            id="eMoneyPin" 
                                            {...register("eMoneyPin", {...eMoneyPinValidators}) }    
                                            type="number" 
                                            className={`form__input ${!errors.eMoneyPin?.message && 'valid'}`} 
                                            placeholder="6891" />
                                    </div>   
                                </motion.div>                            
                            </>
                        }

                        { payMethod === "cash" && 
                            <>
                                <motion.div className="checkout__cash-container"
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    exit={{opacity:0}}
                                >
                                    <img src={icons.iconCash} alt="cash icon" className="checkout__cash-icon" />
                                    <p className="paragraph">
                                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                    </p>
                                </motion.div>
                            </>
                        }                                              
                    </div>
                </form>                
            </div>
            <div className="summary">
                <h6 className="heading--h6">Summary</h6>
                {
                    cart.products.map((product, i)=>{
                        return (
                            <div key={product.name} className={`summary__product-info ${ i === cart.products.length - 1 ? 'mb-32' : 'mb-24'}`}>
                                <img className="summary__img" src={product.cartImage} alt={product.name} />
                                <div className="summary__product-details">
                                    <div className="summary__product-name">{product.nameShort}</div>
                                    <div className="summary__price">$ {product.price.toLocaleString()}</div>
                                </div>                    
                                <div className="summary__quantity">×{product.quantity}</div>
                            </div>
                        )
                    })
                }
                {
                    cart.products.length > 0 ? 
                    <>
                        <div className="summary__price-details mb-16">
                            <span>total</span>
                            <span>$ {cart.total.toLocaleString()}</span>
                        </div>
                        <div className="summary__price-details mb-16">
                            <span>shipping</span>
                            <span>$ {cart.shipping.toLocaleString()}</span>
                        </div>
                        <div className="summary__price-details mb-24">
                            <span>vat (included)</span>
                            <span>$ {cart.vat.toLocaleString()}</span>
                        </div>
                    </>
                    :
                    <img className='summary__empty-cart' src={images.emptyCart} alt="empty cart" />

                }                
                

                <div className="summary__price-details summary__price-details--grand-total mb-32">
                    <span>grand total</span>
                    <span>$ {cart.products.length > 0 ? cart.grandTotal.toLocaleString() : '0'}</span>
                </div>

                {cart.products.length > 0 ? 
                    <button aria-label="submit order" className='button button--medium summary__btn' form="checkout-form" type='submit'>Continue & pay</button>
                    :
                    <Link aria-label="continue shopping" to="/" className='button summary__btn'>Continue Shopping</Link>
                }
            </div>
        </section>
    )
}

export default Checkout