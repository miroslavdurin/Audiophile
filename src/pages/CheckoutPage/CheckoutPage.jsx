import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Checkout from '../../components/Checkout/Checkout';
import './CheckoutPage.scss';
import { motion } from 'framer-motion';

function CheckoutPage() {
    return (
        <div className="checkout-page">
            <header style={{backgroundColor: '#000'}}>
                <Navbar />
            </header>
            <motion.main
                initial={{
                    opacity: 0
                }}

                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.6
                    }
                }}

                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.4
                    }
                }}
            >
                <Checkout />
            </motion.main>
            <Footer />
        </div>
    )
}

export default CheckoutPage