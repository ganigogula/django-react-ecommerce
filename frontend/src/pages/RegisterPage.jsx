import { useState } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"

function RegisterPage() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = async () => {

        try {

            const response = await axios.post(

                "http://127.0.0.1:8000/api/users/register/",

                {
                    username: username,
                    email: email,
                    password: password
                }

            )

            console.log(response.data)

            alert("Registration Successful")

        } catch (error) {

            console.log(error)

            alert("Registration Failed")

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
                        Register
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

                        type="email"

                        placeholder="Enter email"

                        value={email}

                        onChange={(e) => setEmail(e.target.value)}

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

                        onClick={registerUser}

                        style={{
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}

                    >

                        Register

                    </button>

                </form>

            </div>

        </div>

    )

}

export default RegisterPage