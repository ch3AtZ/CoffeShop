import React, { createContext, useState, useContext} from "react";
import {Alert} from "react-native";


const CartContext =createContext();

export const CartProvider =({children}) =>{
    const [cart , setCart] = useState([]);

    const addToCart = (item) =>{
        if (!cart.some((cartItem)=>cartItem.id === item.id)){
            setCart((prevCart)=>[...prevCart,item]);
            Alert.alert('item has been added to your cart')  
        }
    };

    const removeFromCart =(id) =>{
        setCart((prevCart) =>prevCart.filter((item)=>item.id!== id))
    };

    
    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );


};

export const useCart = () => useContext(CartContext);
