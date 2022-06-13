import { createSlice } from "@reduxjs/toolkit";
import setLocalStorage from "../helpers/localStorage";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        vat: 0,
        grandTotal: 0,
        shipping: 50
    },
   
    reducers: {
        setProducts: (state) => {
            const cart = setLocalStorage();   
            
            if( Array.isArray(cart) && cart.length !== 0 ) {
                state.products = cart;
                state.quantity = +state.products.length;
                state.total = state.products.reduce((prev, curr)=> prev + curr.price * curr.quantity, 0)
                state.vat = +(state.total * 0.2).toFixed(2);
                state.grandTotal = state.total + state.vat + state.shipping;
            }            
        },
        addProduct: (state, action) => {
            state.quantity = state.products.some(product=>product.name === action.payload.product.name) ? state.quantity : state.quantity += 1 ;
            state.products.some(product=>product.name === action.payload.product.name) ? 
                state.products.find(product=>product.name === action.payload.product.name).quantity += action.payload.quantity
                :
                state.products.push({...action.payload.product, quantity: action.payload.quantity});
            state.total += action.payload.product.price * action.payload.quantity;
            state.vat = +(state.total * 0.2).toFixed(2);
            state.grandTotal = state.total + state.vat + state.shipping;

            setLocalStorage(state.products);
        },
        increaseQuantity: (state, action) => {
            const product = state.products.find(product => product.name === action.payload.name);
            product.quantity += 1;
            state.total += product.price ;
            state.vat = +(state.total * 0.2).toFixed(2);
            state.grandTotal = state.total + state.vat + state.shipping;

            setLocalStorage(state.products);
        },
        decreaseQuantity: (state, action) => {
            const product = state.products.find(product => product.name === action.payload.name);
            product.quantity -= 1;
            state.total -= product.price;         
            state.vat = +(state.total * 0.2).toFixed(2);
            state.grandTotal = state.total + state.vat + state.shipping;  

            setLocalStorage(state.products);
        },
        removeProduct: (state, action) => {
            const newProducts = state.products.filter(product=>product.name !== action.payload.name);     
            state.total -= state.products.find(product=> product.name === action.payload.name).price;
            state.products = newProducts; 
            state.vat = +(state.total * 0.2).toFixed(2);
            state.grandTotal = state.total + state.vat + state.shipping;
            state.quantity = +state.products.length;

            setLocalStorage(state.products)
        },
        removeAll: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
            state.vat = 0;
            state.grandTotal = 0;
            state.shipping = 50;

            setLocalStorage([]);
        }
    }
})

export const {setProducts, addProduct, increaseQuantity, decreaseQuantity, removeAll, removeProduct} = cartSlice.actions;

export default cartSlice.reducer;