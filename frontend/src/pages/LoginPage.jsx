import { useState, useContext } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function LoginPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const { setIsAuthenticated } =
        useContext(AuthContext)

    const loginUser = async () => {

        try {

            const response = await axios.post(

               "https://django-react-ecommerce-0h1f.onrender.com/api/users/login/",

                {
                    username: username,
                    password: password
                }

            )

            console.log(response.data)

            localStorage.setItem(
                "access_token",
                response.data.access
            )

            setIsAuthenticated(true)

            alert("Login Successful")

            navigate("/")

        } catch (error) {

            console.log(error.response.data)

            alert("Invalid Credentials")

        }

    }

    return (

        <div>

            <Navbar />

            <div

                className="form-container"

                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh"
                }}

            >

                <form

                    className="form-box"

                    onSubmit={(e) => e.preventDefault()}

                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        width: "300px",
                        padding: "30px",
                        borderRadius: "10px",
                        backgroundColor: "#1e1e1e"
                    }}

                >

                    <h1 style={{ textAlign: "center" }}>
                        Login
                    </h1>

                    <input

                        type="text"

                        placeholder="Enter username"

                        value={username}

                        onChange={(e) => setUsername(e.target.value)}

                        style={{
                            padding: "10px",
                            borderRadius: "5px",
                            border: "none"
                        }}

                    />

                    <input

                        type="password"

                        placeholder="Enter password"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                        style={{
                            padding: "10px",
                            borderRadius: "5px",
                            border: "none"
                        }}

                    />

                    <button

                        type="button"

                        onClick={loginUser}

                        style={{
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}

                    >

                        Login

                    </button>

                </form>

            </div>

        </div>

    )

}

export default LoginPage