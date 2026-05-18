import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Navbar from "../components/Navbar"
import { CartContext } from "../context/CartContext"

function ProductDetailsPage() {

    const { id } = useParams()

    const [product, setProduct] = useState(null)

    const { cartItems, setCartItems } =
        useContext(CartContext)

    useEffect(() => {

        getProduct()

    }, [])

    const getProduct = async () => {

        try {

            const response = await axios.get(
                `http://127.0.0.1:8000/api/products/${id}/`
            )

            setProduct(response.data)

        } catch (error) {

            console.log(error)

        }

    }

    const addToCart = () => {

        let updatedCart = [...cartItems]

        const existingProduct = updatedCart.find(
            (item) => item.id === product.id
        )

        if (existingProduct) {

            existingProduct.quantity += 1

        } else {

            updatedCart.push({
                ...product,
                quantity: 1
            })

        }

        setCartItems(updatedCart)

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        )

        alert("Product Added To Cart")

    }

    if (!product) {

        return (

            <div>

                <Navbar />

                <h1
                    style={{
                        textAlign: "center",
                        marginTop: "50px"
                    }}
                >
                    Loading Product...
                </h1>

            </div>

        )

    }

    return (

        <div>

            <Navbar />

            <div

                style={{
                    display: "flex",
                    gap: "40px",
                    padding: "40px",
                    alignItems: "center"
                }}

            >

                <img
                    src={`http://127.0.0.1:8000/media/${product.image}`}
                    alt={product.title}


                    style={{
                        width: "400px",
                        borderRadius: "10px"
                    }}

                />

                <div>

                    <h1>{product.title}</h1>

                    <p>{product.description}</p>

                    <h2>
                        ₹ {product.price}
                    </h2>

                    <p>
                        Stock: {product.stock}
                    </p>

                    <button

                        onClick={addToCart}

                        style={{
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}

                    >

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>

    )

}

export default ProductDetailsPage