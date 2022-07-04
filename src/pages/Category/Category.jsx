import React, {useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Product from '../../components/Product/Product';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';
import Categories from '../../components/Categories/Categories';
import './Category.scss';
import { motion } from 'framer-motion';
import {data} from '../../constants/index';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setHeroAnimationFinished } from '../../redux/animationsRedux';

function Category({category}) {    
    
    const animations = useSelector(state=>state.animations);
    const dispatch = useDispatch();
    
    const headerVariants = {
        hide: {
            maxHeight: 0,
        },
        show: {
            maxHeight: '25rem',
            transition: {
                duration: 0.7,
                delay: animations.isRendered ? 0 : 0.7
            }
        },
        exit: {
            maxHeight: 0,
            transition: {
                duration: 0.6
            }
        }
    }

    const products = Object.entries(data).filter(entry=> entry[1].category === category.toLowerCase()).map(el=> el[1]);

    useEffect(()=> { window.scrollTo(0,0) });

    return (
        <>
            <header className='category__header mb-160'>
                <Navbar />
                <motion.div className="category__title container"
                    variants={headerVariants}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    onAnimationComplete={()=>dispatch(setHeroAnimationFinished({heroAnimationFinished: true}))}
                >
                    <h2 className="heading--h2">{category}</h2>
                </motion.div>
            </header>
            <motion.main
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.7
                    }
                }}
            >
                {
                    products.map((product, i)=>{
                        return (
                            <Product isLastChild={i===products.length - 1} key={product.name} data={product} isReversed={ i%2 !== 0 }/>
                        )
                    })
                }
                <Categories />
                <Info />
            </motion.main>
            <Footer />
        </>        
    )
}

export default Category;