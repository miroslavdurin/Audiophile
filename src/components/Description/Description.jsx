import React from 'react';
import './Description.scss';

function Description({data}) {
    const {features, includes} = data;    

    return (
        <section className="section-description container mb-160">
            <div className="description__features">
                <h3 className="heading--h3 mb-32">Features</h3>
                {features.split('\n').map((feature,i)=><p key={i} className={`paragraph ${ i === 1 && "mb-24"}`}>{feature}</p>)}                
            </div>
            <div className="description__includes">
                <h3 className="heading--h3 mb-32">In the box</h3>
                <div className="description__details">
                    {includes.map(({item,quantity}, i) => (
                        <p key={i+25} className="paragraph mb-16">
                            <span>{quantity}×</span>
                            <span>{item}</span>                        
                        </p>)
                    )}    
                </div>                
            </div>
        </section>
    )
}

export default Description;