import React from 'react';
import './Gallery.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Gallery({images}) {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0)

    const {first, second, third} = images;     

    /* Logic needed for tilt effect while hovering gallery */
    function handleMove(e) {
        const leftRect = e.target.closest('.gallery__container').getBoundingClientRect().left;
        const topRect = e.target.closest('.gallery__container').getBoundingClientRect().top;

        const width = e.target.width / 2;
        const height = e.target.height / 2;

        setPosX((e.screenX - leftRect - width) / 400 )
        setPosY((e.clientY - topRect - height) / 300)
    }

    return (
        <section className="section-gallery container mb-160">
            <div className="gallery--left">
                <div className="gallery__container">
                    <motion.picture className="gallery__img-first"
                        whileHover={{
                            scale: 1.02,
                            rotateY: posX + 'deg',
                            rotateX: posY + 'deg',
                        }}

                        transition = {{
                            scale: {
                                duration: 0.3
                            },
                            default: {
                                duration: 0.4,
                                type: "spring",                                
                            }
                        }}

                        onMouseMove={(e)=>handleMove(e)}                                            
                    >
                        <source srcSet={first.mobile} media="(max-width: 34.37em)" />
                        <source srcSet={first.tablet} media="(max-width: 56.25em)" />
                        <source srcSet={first.desktop} media="(min-width: 65.25em)" /> 
                                                
                        <img src={first.desktop} srcSet={first.desktop} alt="gallery" className="gallery__img-first" />
                    </motion.picture>
                </div>
                <div className="gallery__container">
                    <motion.picture className="gallery__img-second"
                        whileHover={{
                            scale: 1.02,
                            rotateY: posX + 'deg',
                            rotateX: posY + 'deg',
                        }}

                        transition = {{
                            scale: {
                                duration: 0.3
                            },
                            default: {
                                duration: 0.4,
                                type: "spring"
                            }
                        }}

                        onMouseMove={(e)=>handleMove(e)}                      
                    >
                        <source srcSet={second.mobile} media="(max-width: 34.37em)" />
                        <source srcSet={second.tablet} media="(max-width: 56.25em)" />
                        <source srcSet={second.desktop} media="(min-width: 65.25em)" /> 
                        
                        <img src={second.desktop} srcSet={second.desktop} alt="gallery" className="gallery__img-second" />
                    </motion.picture>
                </div> 
            </div>
            <div className="gallery--right">
                <div className="gallery__container">
                    <motion.picture className="gallery__img-third"
                        whileHover={{
                            scale: 1.03,
                            rotateY: posX * 0.3 + 'deg',
                            rotateX: posY * 0.3 + 'deg',
                        }}

                        transition = {{
                            scale: {
                                duration: 0.5
                            },
                            default: {
                                duration: 0.35,
                                type: "spring"
                            }
                        }}
                        onMouseMove={(e)=>handleMove(e)}
                        >
                        <source srcSet={third.mobile} media="(max-width: 34.37em)" />
                        <source srcSet={third.tablet} media="(max-width: 56.25em)" />
                        <source srcSet={third.desktop} media="(min-width: 65.25em)" /> 
                        
                        <img src={third.desktop} srcSet={third.desktop} alt="gallery" className="gallery__img-third" />
                    </motion.picture>
                </div>
            </div>            
        </section>
    )
}

export default Gallery