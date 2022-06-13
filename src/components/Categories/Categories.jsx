import React from 'react';
import './Categories.scss';
import {images, icons} from '../../constants/index';
import { useNavigate } from 'react-router-dom';

function Categories({isMobileMenu}) {
    
    const {categoryEarphones, categoryHeadphones, categorySpeakers} = images;
    const navigate = useNavigate();

    function handleClick(e) {
        navigate(`/${e.target.closest('.category').dataset.category}`);
    }

    return (
        <section className={`section-categories container mb-160 ${isMobileMenu && 'mobile-nav'}`}>
            <div onClick={handleClick} data-category="headphones" className="category">
                <img className="category__img" src={categoryHeadphones} alt="category headphones image" />
                <h6 className="heading--h6">Headphones</h6>
                <div className="category__shop">
                    <span className="category__shop--text">Shop</span>
                    <span className="category__shop--icon">
                        <img src={icons.iconArrowRight} alt="right chevron icon" />
                    </span>
                </div>
            </div>
            <div onClick={handleClick} data-category="speakers" className="category">
                <img className="category__img" src={categorySpeakers} alt="category speakers image"/>
                <h6 className="heading--h6">Speakers</h6>
                <div className="category__shop">
                    <span className="category__shop--text">Shop</span>
                    <span className="category__shop--icon">
                        <img src={icons.iconArrowRight} alt="right chevron icon" />
                    </span>
                </div>
            </div>
            <div onClick={handleClick} data-category="earphones" className="category">
                <img className="category__img" src={categoryEarphones} alt="category earphones image"/>
                <h6 className="heading--h6">Earphones</h6>
                <div className="category__shop">
                    <span className="category__shop--text">Shop</span>
                    <span className="category__shop--icon">
                        <img src={icons.iconArrowRight} alt="right chevron icon" />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Categories;