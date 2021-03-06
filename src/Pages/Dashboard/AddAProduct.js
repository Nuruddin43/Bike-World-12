import axios from "axios"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import auth from "../../firebase.init"

const AddAProduct = () => {
  const { purchaseId } = useParams()
  const { register } = useForm()
  const [user] = useAuthState(auth)

  const onSubmit = (event) => {
    event.preventDefault()
    const newProduct = {
      purchaseId: purchaseId,
      img: event.target.img.value,
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      order: event.target.order.value,
    }
    axios
      .post("https://pure-wave-91095.herokuapp.com/newProduct", newProduct)
      .then((response) => {
        const { data } = response
        if (data.insertedId) {
          toast("Product is succesfully added!!!")
          event.target.reset()
        } else {
          toast.error("Failed to add the product")
        }
      })
  }
  return (
    <div className="hero">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-control w-full max-w-xs">
              <h2 className="text-4xl text-center font-bold">
                Add new product
              </h2>
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="Photo URL"
                className="input input-bordered w-full max-w-xs font-bold pt-2"
                {...register("img", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs font-bold"
                {...register("name", {
                  required: true,
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
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
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered w-full max-w-xs font-bold"
                {...register(
                  "description",
                  {
                    required: true,
                  },
                  { min: 1, max: 5 }
                )}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Available Stock</span>
              </label>
              <input
                type="number"
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

            <input
              className="btn mt-5 w-full max-w-xs text-white"
              type="submit"
              value="ADD PRODUCT"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddAProduct
