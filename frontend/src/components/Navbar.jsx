import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { AuthContext } from "../context/AuthContext"

function Navbar() {

    const token = localStorage.getItem("access_token")
    const navigate = useNavigate()
    const { cartItems } = useContext(CartContext)
    const {
        isAuthenticated,
        setIsAuthenticated
    } = useContext(AuthContext)


    const logoutUser = () => {

        localStorage.removeItem("access_token")
        setIsAuthenticated(false)

        alert("Logout Successful")

        navigate("/login")

    }
    const totalCartItems = cartItems.reduce(

        (total, item) =>

            total + item.quantity,

        0

    )

    return (

        <div

            className="navbar"

            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "#111",
                color: "white"
            }}

        >

            <h2>MyStore</h2>

            <div

                className="nav-links"

                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center"
                }}

            >

                <Link

                    to="/"

                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}

                >
                    Home
                </Link>

                {
                    isAuthenticated ? (

                        <button

                            onClick={logoutUser}

                            style={{
                                padding: "8px 12px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}

                        >
                            Logout
                        </button>

                    ) : (

                        <>
                            <Link

                                to="/login"

                                style={{
                                    color: "white",
                                    textDecoration: "none"
                                }}

                            >
                                Login
                            </Link>

                            <Link

                                to="/register"

                                style={{
                                    color: "white",
                                    textDecoration: "none"
                                }}

                            >
                                Register
                            </Link>
                        </>

                    )
                }

                <Link

                    to="/cart"

                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}

                >
                    Cart ({totalCartItems})
                </Link>

            </div>

        </div>

    )

}

export default Navbar