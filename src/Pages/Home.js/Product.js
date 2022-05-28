import React from "react"

import { Link, useNavigate } from "react-router-dom"

const Product = ({ product }) => {
  const { _id, name, img, description, price } = product

  const navigate = useNavigate()

  const navigateToProductDetail = (id) => {
    navigate(`/purchase/${id}`)
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto ">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{name}</h2>
        <p>{description}</p>
        <p className="font-bold">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/purchase/${_id}`}>
            <button
              className="btn btn-primary"
              onClick={() => navigateToProductDetail(_id)}
            >
              Order Now
            </button>
          </Link>
          {/* <button className="btn btn-primary">Order Now</button> */}
        </div>
      </div>
    </div>
  )
}

export default Product
