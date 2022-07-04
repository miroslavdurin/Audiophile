import React from 'react';
import './Description.scss';
import { motion } from 'framer-motion';

function Description({data}) {
    const {features, includes} = data;    

    /* FRAMER MOTION variants */
    const featuresVariants = {
        hide: {
            y: 20,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    }

    const includesVariants = {
        hide: {
            x: 20,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.5
            }
        }
    }

    return (
        <section className="section-description container mb-160">
            <motion.div className="description__features"
                variants={featuresVariants}
                initial="hide"
                whileInView="show"
                viewport={{once: true, amount: 0.75}}
            >
                <h3 className="heading--h3 mb-32">Features</h3>
                {features.split('\n').map((feature,i)=><p key={i} className={`paragraph ${ i === 1 && "mb-24"}`}>{feature}</p>)}                
            </motion.div>
            <motion.div className="description__includes"
                variants={includesVariants}
                initial="hide"
                whileInView="show"
                viewport={{once: true, amount: 0.7}}
            >
                <h3 className="heading--h3 mb-32">In the box</h3>
                <div className="description__details">
                    {includes.map(({item,quantity}, i) => (
                        <p key={i+25} className="paragraph mb-16">
                            <span>{quantity}×</span>
                            <span>{item}</span>                        
                        </p>)
                    )}    
                </div>                
            </motion.div>
        </section>
    )
}

export default Description;