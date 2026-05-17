import { createContext, useState, useEffect } from "react"

export const CartContext =
    createContext()

function CartProvider({ children }) {

    const [cartItems, setCartItems] =
        useState([])

    useEffect(() => {

        const cart =
            localStorage.getItem("cart")

        if (cart) {

            setCartItems(JSON.parse(cart))

        }

    }, [])

    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cartItems)
        )

    }, [cartItems])

    return (

        <CartContext.Provider

            value={{
                cartItems,
                setCartItems
            }}

        >

            {children}

        </CartContext.Provider>

    )

}

export default CartProvider