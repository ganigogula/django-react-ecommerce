import {
  Routes,
  Route
} from "react-router-dom"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import MyOrdersPage from "./pages/MyOrdersPage"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetailsPage />}
      />

      <Route

        path="/cart"

        element={

          <ProtectedRoute>

            <CartPage />

          </ProtectedRoute>

        }

      />

      <Route

        path="/checkout"

        element={

          <ProtectedRoute>

            <CheckoutPage />

          </ProtectedRoute>

        }

      />

      <Route

        path="/my-orders"

        element={

          <ProtectedRoute>

            <MyOrdersPage />

          </ProtectedRoute>

        }

      />

    </Routes>

  )

}

export default App