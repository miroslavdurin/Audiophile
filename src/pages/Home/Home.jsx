import React, {useEffect} from 'react';
import './Home.scss';
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from '../../components/Categories/Categories';
import Features from '../../components/Features/Features';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';

function Home() {
    useEffect(()=> { window.scrollTo(0,0) }, [] );
    
    return (
        <motion.div>
            <header className="home__header mb-200">
                <Navbar />
                <Hero />
            </header>
            <motion.main
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.7
                    }
                }}
            >
                <Categories />
                <Features />
                <Info />
            </motion.main>
            <Footer />
        </motion.div>
        
    )
}

export default Home