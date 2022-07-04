import { useEffect, useState } from 'react';
import './App.scss';
import './sass/main.scss';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/cartRedux';
import { setHeroAnimationFinished } from './redux/animationsRedux';
import { AnimatePresence } from 'framer-motion';


function SelectedCategory() {
  const {categoryId} = useParams();  

  return (
    <Category category={categoryId} />
  )
}

function SelectedProductDetails() {
  const {productId} = useParams();

  return (
    <ProductDetails productId={productId} />
  )  
}

function App() {
  const [lastLocation, setLastLocation] = useState();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(()=>{
    dispatch(setProducts());
    setLastLocation(location.pathname)
  }, [])
  
  useEffect(()=>{
    if(lastLocation === location.pathname) return;
    setLastLocation(location.pathname);
    window.scrollTo({top: 0})
    setTimeout(()=>{
      dispatch(setHeroAnimationFinished({heroAnimationFinished: false}))
    }, 700)
  }, [location])

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path=':categoryId' element={<SelectedCategory />} />
          <Route path='/product/:productId' element={<SelectedProductDetails />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes> 
      </AnimatePresence>        
    </div>
         
  );
}

export default App;
