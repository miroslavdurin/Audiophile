import React, {useEffect, useState} from 'react';
import './Navbar.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import CartModal from '../CartModal/CartModal';
import Categories from '../Categories/Categories';

import { icons } from '../../constants/index';
import { useSelector } from 'react-redux';

function Navbar() {
    const [openCart, setOpenCart] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const location = useLocation();

    const cart = useSelector(state=>state.cart);
    
    const {logo, iconCart} = icons;    

    function handleOpenCartModal() {
        setOpenCart(prev=> setOpenCart(!prev))        
    }

    function handleClick(e) {
        if(e.target.closest('.nav__cart-btn') || e.target.classList.contains('cart-modal__btn')) return;
        if(!e.target.closest('.cart-modal__container') || location.pathname === "/checkout") setOpenCart(false);        
    }

    useEffect(()=>{
        window.addEventListener('click', handleClick);
    },[])

    return (
        <>
            <nav className='nav'>   
                <div className="container">
                <button aria-label="navigation hamburger button" onClick={()=>setOpenNav(!openNav)} className="nav__hamburger-btn">
                    <img src={icons.iconHamburger} alt="icon hamburger" className="nav__hamburger-icon" />
                </button>
                <Link className="nav__logo-link" to={'/'}>
                    <img className="nav__logo" src={logo} alt="Audiophile logo" /> 
                </Link>                   
                <ul className="nav__links">
                    <li className="nav__item">
                        <NavLink to={"/"} className={({isActive}) => isActive ? 'nav__link active' : 'nav__link'}>Home</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to={"/headphones"} className={({isActive}) => isActive ? 'nav__link active' : 'nav__link'}>Headphones</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to={"/speakers"} className={({isActive}) => isActive ? 'nav__link active' : 'nav__link'}>Speakers</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to={"/earphones"} className={({isActive}) => isActive ? 'nav__link active' : 'nav__link'}>Earphones</NavLink>
                    </li>
                </ul>  
                <button aria-label="navigation cart button" className="nav__cart-btn" onClick={handleOpenCartModal}>
                    <svg>
                        <use href={`${iconCart}#icon-cart`} />
                    </svg>
                    <div className={`nav__cart-quantity ${cart.quantity && 'visible'}`}><span>{cart.quantity}</span></div>                                       
                </button>                
                </div>                     
            </nav>  
            {openCart && <CartModal />} 
            {openNav && 
                <>
                    <div onClick={()=>setOpenNav(false)} className="nav__mobile-container container">
                        <Categories isMobileMenu={true} />
                    </div>
                    <div onClick={()=>setOpenNav(false)} className="nav__mobile-overlay" />
                </>
            }         
        </>

    )
}

export default Navbar