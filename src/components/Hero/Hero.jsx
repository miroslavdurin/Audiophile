import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';

import {images} from '../../constants/index'

function Hero() {

    return (
        <div className='hero container'>
            <div className="hero__text-content">
                <p className="overline hero__title mb-24">New product</p>
                <h1 className="hero__heading heading--h1 mb-24">
                    XX99 Mark II Headphones
                </h1>
                <p className="hero__text paragraph mb-40">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <Link to={'/product/xx99-mark-two-headphones'} className='button'>See product</Link>
            </div>
            <div className="hero__img-container" />                
        </div>
    )
}

export default Hero