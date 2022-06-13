export default function setLocalStorage(products) {        
    if(!products) {
        const cart = JSON.parse(localStorage.getItem("cart"));   
        
        if(!cart) {
            localStorage.setItem("cart", JSON.stringify([]));
            return
        } 
        return cart;          
    }    
    localStorage.setItem("cart", JSON.stringify(products));           
}