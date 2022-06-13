import { useEffect } from 'react';
import './App.scss';
import './sass/main.scss';
import { Routes, Route, useParams } from 'react-router-dom';

import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/cartRedux';


function SelectedCategory() {
  /* TODO Make animations */
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
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setProducts())
  }, [])

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':categoryId' element={<SelectedCategory />} />
        <Route path='/product/:productId' element={<SelectedProductDetails />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes> 
    </div>
         
  );
}

export default App;
