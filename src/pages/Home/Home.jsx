import React, {useEffect} from 'react';
import './Home.scss';
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from '../../components/Categories/Categories';
import Features from '../../components/Features/Features';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';

function Home() {
    useEffect(()=> { window.scrollTo(0,0) }, [] );


    return (
        <>
            <header className="home__header mb-200">
                <Navbar />
                <Hero />
            </header>
            <main>
                <Categories />
                <Features />
                <Info />
            </main>
            <Footer />
        </>
        
    )
}

export default Home