import React, { createContext, useState } from 'react'
import headphones from '../components/assets/data'

export const ShopContext = createContext(null)
const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < headphones.length+1; index++) {
        cart[index] = 0
    }
    return cart
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart)
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev }
            delete updatedCart[itemId]
            return updatedCart
        })
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            
            if (cartItems[item] > 0) {
                let itemInfo = headphones.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItem = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue = {headphones, cartItems, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount, getTotalCartItems}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
 export default ShopContextProvider