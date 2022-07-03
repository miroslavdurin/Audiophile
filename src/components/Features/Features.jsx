import React from 'react';
import './Features.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux/es/exports';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function Features() {
    const {heroAnimationFinished} = useSelector(state=>state.animations);

    const isSmallScreen =  useMediaQuery('(max-width: 65.25em)');    

    const contentVariants = {
        hide: {
            x: 20,
            opacity: 0
        },
        show: heroAnimationFinished && {             
            x: 0,
            opacity: 1,            
            transition: {
                duration: 0.8
            }
        },
        hideSmall: {
            opacity: 0,
            y: 20
        },
        showSmall: heroAnimationFinished && {   
            opacity: 1,       
            y: 0,     
            transition: {
                duration: 0.8
            }
        }
    }

    const imageVariants = {
        hide: {
            opacity: 0,
            y: "42rem"
        },
        show: heroAnimationFinished && {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        },
        hideSmall: {
            opacity: 0,
        },
        showSmall: heroAnimationFinished && {
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    }    
    
    return (
        <section className='section-features container mb-200'>
            <div className="feature__speaker-zx9 mb-48">
                <motion.div 
                    className="feature__zx9-image-container"
                    variants={imageVariants}
                    initial={isSmallScreen ? "hideSmall" : "hide"}
                    whileInView={isSmallScreen ? "showSmall" : "show"}
                    viewport={{once: true, amount: isSmallScreen && 0.8}}                
                    key={isSmallScreen + "image"}
                />
                <motion.div className="feature__zx9-content"
                    initial={isSmallScreen ? "hideSmall" : "hide"}
                    whileInView={isSmallScreen ? "showSmall" : "show"}
                    variants={contentVariants}
                    viewport={{once: true, amount: 0.5}}
                    /* key is necessary here for useMediaQuery, it's because it sets isSmallScreen on false when it firts loads
                    and it doesn't re-render it again until key had changed */
                    key={isSmallScreen + "content"}
                >
                    <h1 className="heading--h1 mb-24">zx9 speaker</h1>
                    <p className="paragraph mb-40">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to={'/product/zx9-speaker'} className="button button--black">See product</Link>
                </motion.div>
            </div>
            <motion.div className="feature__speaker-zx7 mb-48"
                initial={{
                    opacity: 0
                }}

                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 1
                    }
                }}

                viewport={{once: true, amount: 0.7}}
            >
                <h4 className="heading--h4">zx7 speaker</h4>
                <Link to={'/product/zx7-speaker'} className="button button--transparent">see product</Link>
            </motion.div>
            <div className="feature__earphones">
                <motion.div className="feature__earphones-image" 
                    initial={{
                        opacity: 0,
                        rotateY: '-270deg'
                    }}

                    whileInView={{
                        opacity: 1,
                        rotateY: 0,
                        transition: {
                            duration: 1.4
                        }
                    }}                    

                viewport={{once: true, amount: 0.7}}

                />
                <motion.div className="feature__earphones-content"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1
                        }
                    }}

                viewport={{once: true, amount: 0.7}}                    
                >
                    <h4 className="heading--h4">yx1 earphones</h4>
                    <Link to={'product/yx1-earphones'} className="button button--transparent">see product</Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Features;