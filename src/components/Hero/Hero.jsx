import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setHeroAnimationFinished } from '../../redux/animationsRedux';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function Hero() {
    const {isRendered, heroAnimationFinished} = useSelector(state=>state.animations);
    const dispatch = useDispatch();

    const isSmallScreen =  useMediaQuery('(max-width: 65.25em)');

    /* FRAMER MOTION variants */
    const containerVariants = {
        hide: {
            maxHeight: 0,
        },
        show: {
            maxHeight: '70rem',
            transition: {
                duration: 0.6,
                delay: isRendered ? 0 : 0.2
            }
        },
        exit: {
            maxHeight: 0,
            transition: {
                duration: 0.6
            }
        }
    }

    const h1Variants = {
        hide: { y: 60 },
        show: { y: 0,
            transition: {
                duration: 0.7,
                delay: isRendered ? 0.7 : 1.2
            }
        }
    }

    const overlineVariants = {
        hide: {
            opacity: 0,
            x: -100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                delay: isRendered ? 0.3 : 0.8
            }
        },
        hideSmall: {
            opacity: 0,
        },
        showSmall: {
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: isRendered ? 0.3 : 0.8
            }
        }        
    } 
    

    const paragraphVariants = {
        hide: {
            opacity: 0,
            x: -250
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                delay: isRendered ? 0.3 : 0.8
            }
        },
        hideSmall: {
            opacity: 0,
        },
        showSmall: {
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: isRendered ? 0.3 : 0.8
            }
        }
    }

    const buttonVariants = {
        hide: {
            opacity: 0,
            x: -250
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                delay: isRendered ? 0.5 : 1
            }
        },
        hideSmall: {
            opacity: 0
        },
        showSmall: {
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: isRendered ? 0.5 : 1
                }
        }
    }    
    
    return (
        <motion.div 
            variants={containerVariants}
            initial="hide"
            animate="show"
            exit="exit"
            className='hero container'
            >
            <div className="hero__text-content">
                <motion.p className="overline hero__title mb-24"
                    variants={overlineVariants}
                    initial={isSmallScreen ? "hideSmall" : "hide"}
                    animate={isSmallScreen ? "showSmall" : "show"}
                    key={isSmallScreen + "overline"}
                >New product</motion.p>
                {
                    heroAnimationFinished ?
                    <h1 className="hero__heading heading--h1 mb-24">XX99 Mark II Headphones</h1>
                    :
                    <h1 className="hero__heading heading--h1 mb-24">
                        <div>
                            <motion.span
                                initial="hide"
                                animate="show"
                                variants={h1Variants}>
                                XX99 Mark II
                            </motion.span> 
                        </div>
                        <div>
                            <motion.span
                                initial="hide"
                                animate="show"
                                variants={h1Variants}
                                onAnimationComplete={()=>dispatch(setHeroAnimationFinished({heroAnimationFinished: true}))} >
                                    Headphones
                            </motion.span> 
                        </div>
                    </h1>

                }
                
                <motion.p className="hero__text paragraph mb-40"
                    variants={paragraphVariants}
                    initial={isSmallScreen ? "hideSmall" : "hide"}
                    animate={isSmallScreen ? "showSmall" : "show"}
                    key={isSmallScreen + "paragraph"}
                >
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </motion.p>

                {
                    heroAnimationFinished ?                   
                        <Link to={'/product/xx99-mark-two-headphones'} className='button'>See product</Link>                   
                    :
                        <motion.div
                            variants={buttonVariants}
                            initial={isSmallScreen ? "hideSmall" : "hide"}
                            animate={isSmallScreen ? "showSmall" : "show"}
                            key={isSmallScreen + "button"}
                        >
                                <Link to={'/product/xx99-mark-two-headphones'} className='button'>See product</Link>
                        </motion.div>
                }
                
            </div>
            <div className="hero__img-container" />                
        </motion.div>
    )
}

export default Hero