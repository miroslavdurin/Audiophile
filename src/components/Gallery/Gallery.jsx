import React from 'react';
import './Gallery.scss';

function Gallery({images}) {

    const {first, second, third} = images;   

    return (
        <section className="section-gallery container mb-160">
            <div className="gallery--left">
                <div className="gallery__container">
                    <picture className="gallery__img-first">
                        <source srcSet={first.mobile} media="(max-width: 34.37em)" />
                        <source srcSet={first.tablet} media="(max-width: 56.25em)" />
                        <source srcSet={first.desktop} media="(min-width: 65.25em)" /> 
                        
                        <img src={first.desktop} srcSet={first.desktop} alt="gallery image" className="gallery__img-first" />
                    </picture>
                </div>
                <div className="gallery__container">
                    <picture className="gallery__img-second">
                        <source srcSet={second.mobile} media="(max-width: 34.37em)" />
                        <source srcSet={second.tablet} media="(max-width: 56.25em)" />
                        <source srcSet={second.desktop} media="(min-width: 65.25em)" /> 
                        
                        <img src={second.desktop} srcSet={second.desktop} alt="gallery image" className="gallery__img-second" />
                    </picture>
                </div> 
            </div>
            <div className="gallery--right">
                <div className="gallery__container">
                    <picture className="gallery__img-third">
                        <source srcSet={third.mobile} media="(max-width: 34.37em)" />
                        <source srcSet={third.tablet} media="(max-width: 56.25em)" />
                        <source srcSet={third.desktop} media="(min-width: 65.25em)" /> 
                        
                        <img src={third.desktop} srcSet={third.desktop} alt="gallery image" className="gallery__img-third" />
                    </picture>
                </div>
            </div>            
        </section>
    )
}

export default Gallery