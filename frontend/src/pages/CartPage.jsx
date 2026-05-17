import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

function CartPage() {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {

        const cart = localStorage.getItem("cart")

        if (cart) {

            setCartItems(JSON.parse(cart))

        }

    }, [])

    const removeFromCart = (productId) => {

        const updatedCart = cartItems.filter(
            (item) => item.id !== productId
        )

        setCartItems(updatedCart)

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        )

    }

    const totalPrice = cartItems.reduce(

        (total, item) =>

            total + (
                Number(item.price) * item.quantity
            ),

        0

    )

    const increaseQuantity = (productId) => {

        const updatedCart = cartItems.map((item) => {

            if (item.id === productId) {

                return {
                    ...item,
                    quantity: item.quantity + 1
                }

            }

            return item

        })

        setCartItems(updatedCart)

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        )

    }

    const decreaseQuantity = (productId) => {

        const updatedCart = cartItems.map((item) => {

            if (item.id === productId) {

                return {
                    ...item,
                    quantity: item.quantity - 1
                }

            }

            return item

        }).filter((item) => item.quantity > 0)

        setCartItems(updatedCart)

        

    }

    return (

        <div>

            <Navbar />

            <h1>
                Cart Page
            </h1>

            {

                cartItems.map((item) => (

                    <div key={item.id}>

                        <img
                            src={`http://127.0.0.1:8000${item.image}`}
                            width="150"
                        />

                        <h2>{item.title}</h2>

                        <p>{item.description}</p>

                        <p>₹ {item.price}</p>

                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                marginBottom: "10px"
                            }}
                        >

                            <button
                                onClick={() => decreaseQuantity(item.id)}
                            >
                                -
                            </button>

                            <span>
                                Quantity: {item.quantity}
                            </span>

                            <button
                                onClick={() => increaseQuantity(item.id)}
                            >
                                +
                            </button>

                        </div>

                        <button
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>

                    </div>

                ))

            }

            <h2>
                Total Price: ₹ {totalPrice}
            </h2>

        </div>

    )

}

export default CartPage