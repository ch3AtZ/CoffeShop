import React, { createContext, useState, useContext} from "react";

const CartContext =createContext();

export const CartProvider =({children}) =>{
    const [cart , setCart] = useState([]);

    const addToCart = (item) =>{
        if (!cart.some((cartItem)=>cartItem.id === item.id)){
            setCart((prevCart)=>[...prevCart,item]);
        }

    };
    const removeFromCart =(id) =>{
        setCart((setCart) =>prevCart.filter((item)=>item.id!== id))
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );


};

export const useCart = () => useContext(CartContext);