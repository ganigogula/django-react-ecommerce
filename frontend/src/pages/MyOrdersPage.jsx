import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"

function MyOrdersPage() {

    const [orders, setOrders] = useState([])

    useEffect(() => {

        getOrders()

    }, [])

    const getOrders = async () => {

        try {

            const response = await axios.get(
                "http://127.0.0.1:8000/api/orders/"
            )

            setOrders(response.data)

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <div>

            <Navbar />

            <h1
                style={{
                    textAlign: "center"
                }}
            >
                My Orders
            </h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "20px"
                }}
            >

                {
                    orders.map((order) => (

                        <div

                            key={order.id}

                            style={{
                                border: "1px solid gray",
                                padding: "20px",
                                borderRadius: "10px"
                            }}

                        >

                            <h2>
                                Product ID: {order.product}
                            </h2>

                            <p>
                                Quantity: {order.quantity}
                            </p>

                            <p>
                                Total Price:
                                ₹ {order.total_price}
                            </p>

                        </div>

                    ))
                }

            </div>

        </div>

    )

}

export default MyOrdersPage