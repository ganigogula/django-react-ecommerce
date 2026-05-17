import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] =
        useState(false)

    useEffect(() => {

        const token =
            localStorage.getItem("access_token")

        if (token) {

            setIsAuthenticated(true)

        }

    }, [])

    return (

        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated
            }}
        >

            {children}

        </AuthContext.Provider>

    )

}

export default AuthProvider