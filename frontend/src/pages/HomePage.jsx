import { useEffect, useState, useContext } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function HomePage() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] =
    useState("All")

  const navigate = useNavigate()

  const { cartItems, setCartItems } =
    useContext(CartContext)

  useEffect(() => {

    getProducts()

  }, [])

  const getProducts = async () => {

    setLoading(true)

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/api/products/"
      )

      console.log(response.data)

      setProducts(response.data)

      setLoading(false)

    } catch (error) {

      setLoading(false)

      console.log("ERROR:", error)

    }

  }

  const addToCart = (product) => {

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

  if (loading) {

    return (

      <div>

        <Navbar />

        <h1
          style={{
            textAlign: "center",
            marginTop: "50px"
          }}
        >
          Loading Products...
        </h1>

      </div>

    )

  }

  const filteredProducts = products

    .filter((product) =>

      product.title
        .toLowerCase()
        .includes(search.toLowerCase())

    )

    .filter((product) =>

      selectedCategory === "All"

      ||

      product.title
        .toLowerCase()
        .includes(selectedCategory.toLowerCase())

    )

  return (

    <div>

      <Navbar />

      <h1 style={{ textAlign: "center" }}>
        Products
      </h1>

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px"
        }}
      >

        <input

          type="text"

          placeholder="Search products..."

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "none"
          }}

        />

      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px"
        }}
      >

        <select

          value={selectedCategory}

          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }

          style={{
            padding: "10px",
            borderRadius: "5px"
          }}

        >

          <option value="All">
            All
          </option>

          <option value="Laptop">
            Laptop
          </option>

          <option value="Mobile">
            Mobile
          </option>

          <option value="Watch">
            Watch
          </option>

          <option value="Camera">
            Camera
          </option>

          <option value="Headphones">
            Headphones
          </option>

          <option value="Shoes">
            Shoes
          </option>

        </select>

      </div>

      {
        filteredProducts.length === 0 && (

          <h2
            style={{
              textAlign: "center",
              marginTop: "50px"
            }}
          >
            No Products Found
          </h2>

        )
      }

      <div

        className="products-container"

        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}

      >

        {

          filteredProducts.map((product) => (

            <div

              className="product-card"

              key={product.id}

              onClick={() =>
                navigate(`/product/${product.id}`)
              }

              style={{
                border: "1px solid gray",
                padding: "20px",
                borderRadius: "10px",
                width: "250px",
                textAlign: "center",
                backgroundColor: "#1e1e1e",
                cursor: "pointer"
              }}

            >

              <img

                src={`http://127.0.0.1:8000${product.image}`}

                alt={product.title}

                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}

              />

              <h2>{product.title}</h2>

              <p>{product.description}</p>

              <p>₹ {product.price}</p>

              <p>Stock: {product.stock}</p>

              <button

                onClick={(e) => {

                  e.stopPropagation()

                  addToCart(product)

                }}

                style={{
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px"
                }}

              >

                Add To Cart

              </button>

            </div>

          ))

        }

      </div>

    </div>

  )

}

export default HomePage