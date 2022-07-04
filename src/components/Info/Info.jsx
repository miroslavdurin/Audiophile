import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import './Info.scss';

function Info() {
    const [isInView, setIsInView] = useState(false);

    const isSmallScreen =  useMediaQuery('(max-width: 65.25em)');

    /* FRAMER MOTION variants */
    const contentVariants = {
        hide: {
            opacity: 0,
            x: -50
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        },
        hideSmall: {
            opacity: 0,
            y: 30,
            transition: {
                duration: 1
            }
        },
        showSmall: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7
            }
        }
    }

    return (
        <section className='section-info container mb-200'>
            <motion.div className="info__content"
                variants={contentVariants}
                initial={isSmallScreen ? "hideSmall" : "hide"}
                whileInView={isSmallScreen ? "showSmall" : "show"}
                key={isSmallScreen + "info-content"}
                viewport={{once: true, amount: 0.5}}
            >
                <h2 className="heading--h2 mb-32">
                    Bringing you the <span>best</span> audio gear
                </h2>
                <p className="paragraph">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </motion.div>
            <svg>
                <filter id="noise" x='0' y='0' width='110%' height='110%'>
                    <motion.feTurbulence 
                    initial= {{
                        baseFrequency: "0.01 0.02" 
                    }}
                    animate = {isInView &&{
                        baseFrequency: "0 0",
                        transition: {
                            duration: 2
                        } 
                    }}
                    result="NOISE" numOctaves="1" 
                    id="turbulence" />
                    <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20"></feDisplacementMap>
                </filter>
            </svg>
            <motion.div onViewportEnter={()=>setIsInView(true)} className="info__img" />
        </section>
    )
}

export default Info