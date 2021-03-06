import React, { useEffect, useState } from "react"
import Product from "./Product"

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://pure-wave-91095.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div className="mt-12">
      <h2 className="text-5xl text-center">Our Products</h2>
      <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  )
}

export default Products
