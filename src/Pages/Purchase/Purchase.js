import React, { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import axios from "axios"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"

const Purchase = () => {
  const { purchaseId } = useParams()
  const [product, setProduct] = useState({})
  const { register } = useForm()
  const [user, loading, error] = useAuthState(auth)
  if (user) {
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const order = {
      name: user.displayName,
      email: user.email,
      product: product.name,
      purchaseId: purchaseId,
      quantity: event.target.quantity.value,
      order: event.target.order.value,
      price: event.target.price.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
    }
    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response
      if (data.insertedId) {
        toast("Your Order is Booked!!!")
        event.target.reset()
      }
    })
  }
  useEffect(() => {
    const url = `http://localhost:5000/purchase/${purchaseId}`
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <div className="card h-96  bg-base-100 shadow-xl mx-auto lg:mt-24 sm:mb-10 ">
        <div className="card-body items-center justify-center text-center ">
          <figure className="">
            <img src={product.img} alt="Shoes" className="rounded-xl" />
          </figure>
          <h2 className="card-title font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="font-bold">Price: ${product.price}</p>
          <div className="card-actions"></div>
        </div>
      </div>
      <div className="hero">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-control w-full max-w-xs">
                <h2 className="text-4xl text-center font-bold">
                  Purchase The Product
                </h2>
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  readOnly
                  placeholder="name"
                  className="input input-bordered w-full max-w-xs font-bold"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  value={user?.email}
                  placeholder="email"
                  className="input input-bordered w-full max-w-xs font-bold"
                  {...register("email", {
                    required: true,
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product</span>
                </label>
                <input
                  type="text"
                  value={product.name}
                  name="product"
                  placeholder="product"
                  className="input input-bordered w-full max-w-xs font-bold"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Available Stock</span>
                </label>
                <input
                  type="number"
                  value={product.instock}
                  name="quantity"
                  placeholder="available quantity"
                  className="input input-bordered w-full max-w-xs font-bold"
                  {...register(
                    "quantity",
                    {
                      required: true,
                    },
                    { min: 1, max: 5 }
                  )}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Min Order Quantity</span>
                </label>
                <input
                  type="number"
                  name="order"
                  placeholder="min order quantity"
                  className="input input-bordered w-full max-w-xs font-bold"
                  {...register(
                    "order",
                    {
                      required: true,
                    },
                    { min: 1, max: 5 }
                  )}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  value={product.price}
                  placeholder="$price"
                  className="input input-bordered w-full max-w-xs font-bold"
                  {...register(
                    "price",
                    {
                      required: true,
                    },
                    { min: 1, max: 5 }
                  )}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-xs font-bold"
                  {...register("address", {
                    required: true,
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered w-full max-w-xs font-bold"
                  {...register("phone", {
                    required: true,
                  })}
                />
              </div>

              <input
                className="btn mt-5 w-full max-w-xs text-white"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase
