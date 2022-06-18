import React from 'react';
import './Features.scss';
import {images} from '../../constants/index';
import { Link } from 'react-router-dom';

function Features() {
    
    return (
        <section className='section-features container mb-200'>
            <div className="feature__speaker-zx9 mb-48">
                <div className="feature__zx9-image-container" />
                <div className="feature__zx9-content">
                    <h1 className="heading--h1 mb-24">zx9 speaker</h1>
                    <p className="paragraph mb-40">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to={'/product/zx9-speaker'} className="button button--black">See product</Link>
                </div>
            </div>
            <div className="feature__speaker-zx7 mb-48">
                <h4 className="heading--h4">zx7 speaker</h4>
                <Link to={'/product/zx7-speaker'} className="button button--transparent">see product</Link>
            </div>
            <div className="feature__earphones">
                <div className="feature__earphones-image" />
                <div className="feature__earphones-content">
                    <h4 className="heading--h4">yx1 earphones</h4>
                    <Link to={'product/yx1-earphones'} className="button button--transparent">see product</Link>
                </div>
            </div>
        </section>
    )
}

export default Features;