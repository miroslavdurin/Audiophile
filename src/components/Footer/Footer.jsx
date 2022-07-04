import React from 'react';
import './Footer.scss';
import {icons} from '../../constants/index';
import { Link, NavLink } from 'react-router-dom';
import {useMediaQuery} from '../../hooks/useMediaQuery';

function Footer() {
    const {iconFacebook, iconInstagram, iconTwitter, logo} = icons;

    const tabletQuery = useMediaQuery('(max-width: 65.25em)');

    return (
        <>
            {
                !tabletQuery ? 
                
                    <footer className='footer'>
                        <div className="container">
                            <div className="footer__left">                                 
                                <div className="footer__line" />
                                <Link className="footer__logo-link" to={'/'}>
                                    <img src={logo} alt="audiophile logo" className="footer__logo" />
                                </Link>
                                <p className="paragraph footer__info">
                                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                                </p>
                                <p className="paragraph footer__copyright">
                                    Copyright 2021. All Rights Reserved
                                </p>
                            </div>
                            <div className="footer__right">
                                <ul className="footer__links">
                                    <li className="footer__item">
                                        <NavLink to={'/'} className={({isActive}) => isActive ? "footer__link active" : "footer__link"}>Home</NavLink>
                                    </li>
                                    <li className="footer__item">
                                        <NavLink to={'/headphones'} className={({isActive}) => isActive ? "footer__link active" : "footer__link"}>Headphones</NavLink>
                                    </li>
                                    <li className="footer__item">
                                        <NavLink to={'/speakers'} className={({isActive}) => isActive ? "footer__link active" : "footer__link"}>Speakers</NavLink>
                                    </li>
                                    <li className="footer__item">
                                        <NavLink to={'/earphones'} className={({isActive}) => isActive ? "footer__link active" : "footer__link"}>Earphones</NavLink>
                                    </li>
                                </ul>  
                                <ul className="footer__icons">
                                    <li className="footer__item">
                                        <a href="/" className="footer__link" aria-label="Link to Facebook page">
                                            <svg>
                                                <use href={`${iconFacebook}#icon-facebook`} />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="/"  className="footer__link" aria-label="Link to Twitter page">
                                            <svg id="twitter">
                                                <use href={`${iconTwitter}#icon-twitter`} />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="/" className="footer__link" aria-label="Link to Instagram page">
                                            <svg>
                                                <use href={`${iconInstagram}#icon-instagram`} />
                                            </svg>                                
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>            
                    </footer>

                    :

                    <footer className='footer'>
                        <div className="container">
                            <div className="footer__left">   
                                <div className="footer__line" />
                                <Link className="footer__logo-link" to={'/'}>
                                    <img src={logo} alt="audiophile logo" className="footer__logo" />
                                </Link>
                                <ul className="footer__links mb-32">
                                    <li className="footer__item">
                                        <NavLink to={'/'} className={({isActive}) => isActive ? "footer__link active" : "footer__link"}>Home</NavLink>
                                    </li>
                                    <li className="footer__item">
                                        <NavLink to={'/headphones'} className={({isActive}) => isActive ? "footer__link active" : "footer__link"}>Headphones</NavLink>
                                    </li>
                                    <li className="footer__item">
                                        <NavLink to={'/speakers'} className={({isActive}) => isActive ? "footer__link active" : "footer__link"}>Speakers</NavLink>
                                    </li>
                                    <li className="footer__item">
                                        <NavLink to={'/earphones'} className={({isActive}) => isActive ? "footer__link active" : "footer__link"}>Earphones</NavLink>
                                    </li>
                                </ul>
                                <p className="paragraph footer__info">
                                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                                </p>
                                
                            </div>
                            <div className="footer__right">
                                <p className="paragraph footer__copyright">
                                    Copyright 2021. All Rights Reserved
                                </p>  
                                <ul className="footer__icons">
                                    <li className="footer__item">
                                        <a href="#" className="footer__link" aria-label="Link to Facebook page">
                                            <svg>
                                                <use href={`${iconFacebook}#icon-facebook`} />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="#"  className="footer__link" aria-label="Link to Twitter page">
                                            <svg>
                                                <use href={`${iconTwitter}#icon-twitter`} />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="#" aria-label="Link to Instagram page" className="footer__link" >
                                            <svg>
                                                <use href={`${iconInstagram}#icon-instagram`} />
                                            </svg>                                
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>            
                    </footer>
            }
        </>
    )
}

export default Footer;