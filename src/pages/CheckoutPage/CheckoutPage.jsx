import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Checkout from '../../components/Checkout/Checkout';
import './CheckoutPage.scss';

function CheckoutPage() {
    return (
        <div className="checkout-page">
            <header style={{backgroundColor: '#000'}}>
                <Navbar />
            </header>
            <main>
                <Checkout />
            </main>
            <Footer />
        </div>
    )
}

export default CheckoutPage