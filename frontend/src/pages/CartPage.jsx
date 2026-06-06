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

    const removeFromCart = (itemId) => {

        const updatedCart = cartItems.filter(
            (item) => item.id !== itemId
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

    const increaseQuantity = (itemId) => {

        const updatedCart = cartItems.map((item) => {

            if (item.id === itemId) {

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

    const decreaseQuantity = (itemId) => {

        const updatedCart = cartItems

            .map((item) => {

                if (item.id === itemId) {

                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }

                }

                return item

            })

            .filter((item) => item.quantity > 0)

        setCartItems(updatedCart)

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        )

    }

    return (

        <div>

            <Navbar />

            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "30px"
                }}
            >
                Cart Page
            </h1>

            {

                cartItems.length === 0 ? (

                    <h2
                        style={{
                            textAlign: "center"
                        }}
                    >
                        Cart Is Empty
                    </h2>

                ) : (

                    cartItems.map((item) => (

                        <div

                            key={item.id}

                            style={{
                                border: "1px solid gray",
                                padding: "20px",
                                margin: "20px auto",
                                width: "350px",
                                borderRadius: "10px",
                                textAlign: "center",
                                backgroundColor: "#1e1e1e"
                            }}

                        >

                            <img
    src={`https://django-react-ecommerce-0h1f.onrender.com${item.image}`}
    alt={item.title}
    style={{
        width: "200px",
        height: "200px",
        objectFit: "cover"
    }}
/>

                            <h2>{item.title}</h2>

                            <p>{item.description}</p>

                            <p>₹ {item.price}</p>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "10px"
                                }}
                            >

                                <button
                                    onClick={() =>
                                        decreaseQuantity(item.id)
                                    }
                                >
                                    -
                                </button>

                                <span>
                                    Quantity: {item.quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        increaseQuantity(item.id)
                                    }
                                >
                                    +
                                </button>

                            </div>

                            <button
                                onClick={() =>
                                    removeFromCart(item.id)
                                }
                            >
                                Remove
                            </button>

                        </div>

                    ))

                )

            }

            <h2
                style={{
                    textAlign: "center",
                    marginTop: "30px"
                }}
            >
                Total Price: ₹ {totalPrice}
            </h2>

        </div>

    )

}

export default CartPage