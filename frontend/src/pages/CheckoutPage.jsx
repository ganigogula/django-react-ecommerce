import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import axios from "axios"

function CheckoutPage() {

    const [cartItems, setCartItems] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        const cart = localStorage.getItem("cart")

        if (cart) {

            setCartItems(JSON.parse(cart))

        }

    }, [])

    const totalPrice = cartItems.reduce(

        (total, item) =>

            total + (
                Number(item.price) * item.quantity
            ),

        0

    )

    const placeOrder = async () => {

        try {

            for (let item of cartItems) {

                await axios.post(

                    "http://127.0.0.1:8000/api/orders/create/",

                    {
                        user: 1,
                        product: item.id,
                        quantity: item.quantity,
                        total_price:
                            item.price * item.quantity
                    }

                )

            }

            alert("Order Placed Successfully")

            localStorage.removeItem("cart")

            setCartItems([])

            navigate("/")

        } catch (error) {

            console.log(error)

            alert("Order Failed")

        }

    }

    return (

        <div>

            <Navbar />

            <div

                style={{
                    padding: "30px"
                }}

            >

                <h1>
                    Checkout
                </h1>

                {

                    cartItems.map((item) => (

                        <div

                            key={item.id}

                            style={{
                                border: "1px solid gray",
                                padding: "20px",
                                marginBottom: "20px",
                                borderRadius: "10px"
                            }}

                        >

                            <h2>{item.title}</h2>

                            <p>
                                Price: ₹ {item.price}
                            </p>

                            <p>
                                Quantity: {item.quantity}
                            </p>

                            <p>
                                Total:
                                ₹ {
                                    Number(item.price)
                                    *
                                    item.quantity
                                }
                            </p>

                        </div>

                    ))

                }

                <h2>
                    Grand Total: ₹ {totalPrice}
                </h2>

                <button

                    onClick={placeOrder}

                    style={{
                        padding: "12px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "20px"
                    }}

                >

                    Place Order

                </button>

            </div>

        </div>

    )

}

export default CheckoutPage