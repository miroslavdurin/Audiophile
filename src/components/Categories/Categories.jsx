import React from 'react';
import './Categories.scss';
import {images, icons} from '../../constants/index';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux/es/exports';

function Categories({isMobileMenu}) {
    const {isRendered} = useSelector(state=>state.animations);    

    /* FRAMER MOTION variants */
    const imageVariants = {
        hide: {
            scale: 0,
            opacity: 0
        },
        show: isRendered && {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.7                     
        }}
    }

    const titleVariants = {
        hide: {
            opacity: 0,
            y: 10
        },
        show: isRendered && {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: 0.3      
        }}
    }

    const spanVariants = {
        hide: {
            opacity: 0,
            y: 10
        },
        show: isRendered && {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: 0.4     
        }}
    }

    
    const {categoryEarphones, categoryHeadphones, categorySpeakers} = images;
    const navigate = useNavigate();

    function handleClick(e) {
        navigate(`/${e.target.closest('.category').dataset.category}`);
    }

    return (
        <section className={`section-categories container mb-160 ${isMobileMenu && 'mobile-nav'}`}>
            <div onClick={handleClick} data-category="headphones" className="category">
                <motion.img className="category__img" 
                    src={categoryHeadphones} 
                    alt="category headphones" 
                    variants={ imageVariants} 
                    initial="hide"
                    whileInView= "show"
                    viewport={{once: true, amount: 0.7}}                    
                />
                <motion.h6 className="heading--h6"
                    variants={titleVariants}
                    initial="hide"
                    whileInView= "show"
                    viewport={{once: true}}
                >Headphones</motion.h6>
                <motion.div className="category__shop"
                    variants={spanVariants}
                    initial="hide"
                    whileInView= "show"
                    viewport={{once: true}}
                >
                    <span className="category__shop--text">Shop</span>
                    <span className="category__shop--icon">
                        <img src={icons.iconArrowRight} alt="right chevron icon" />
                    </span>
                </motion.div>
            </div>
            <div onClick={handleClick} data-category="speakers" className="category">
                <motion.img className="category__img" 
                    variants={imageVariants}
                    initial="hide"
                    whileInView="show"
                    viewport={{once: true, amount: 0.7}}
                    src={categorySpeakers} alt="category speakers"/>
                <motion.h6 className="heading--h6"
                    variants={titleVariants}
                    initial="hide"
                    whileInView= "show"
                    viewport={{once: true }}
                >Speakers</motion.h6>
                <motion.div className="category__shop"
                    variants={spanVariants}
                    initial="hide"
                    whileInView= "show"
                    viewport={{once: true}}
                >
                    <span className="category__shop--text">Shop</span>
                    <span className="category__shop--icon">
                        <img src={icons.iconArrowRight} alt="right chevron icon" />
                    </span>
                </motion.div>
            </div>
            <div onClick={handleClick} data-category="earphones" className="category">
                <motion.img className="category__img" 
                    variants={imageVariants}
                    initial="hide"
                    whileInView="show"
                    viewport={{once: true,amount: 0.7}}
                    src={categoryEarphones} 
                    alt="category earphones"/>
                <motion.h6 className="heading--h6"
                    variants={titleVariants}
                    initial="hide"
                    whileInView= "show"
                    viewport={{once: true}}
                >Earphones</motion.h6>
                <motion.div className="category__shop"
                    variants={spanVariants}
                    initial="hide"
                    whileInView= "show"
                    viewport={{once: true}}
                >
                    <span className="category__shop--text">Shop</span>
                    <span className="category__shop--icon">
                        <img src={icons.iconArrowRight} alt="right chevron icon" />
                    </span>
                </motion.div>
            </div>
        </section>
    )
}

export default Categories;