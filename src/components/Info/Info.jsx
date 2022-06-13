import React from 'react';
import './Info.scss';

function Info() {
    return (
        <section className='section-info container mb-200'>
            <div className="info__content">
                <h2 className="heading--h2 mb-32">
                    Bringing you the <span>best</span> audio gear
                </h2>
                <p className="paragraph">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <div className="info__img" />
        </section>
    )
}

export default Info