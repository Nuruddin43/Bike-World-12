import React, { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import axios from "axios"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"

const AddAReview = () => {
  const { purchaseId } = useParams()
  const [user, loading, error] = useAuthState(auth)
  const { register } = useForm()
  if (user) {
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const review = {
      name: user?.displayName,
      email: user?.email,
      img: event.target.img.value,
      purchaseId: purchaseId,
      ratings: event.target.ratings.value,
      reviews: event.target.reviews.value,
    }
    axios.post("http://localhost:5000/review", review).then((response) => {
      const { data } = response
      if (data.insertedId) {
        toast("Your review is succesfully added!!!")
        event.target.reset()
      }
    })
  }

  return (
    <div>
      <div class="hero">
        <div class="card w-96 bg-base-100 shadow-xl ">
          <div class="card-body">
            <form onSubmit={onSubmit}>
              <div class="form-control w-full max-w-xs">
                <h2 className="text-4xl text-center font-bold">
                  Add your review
                </h2>
                <label class="label">
                  <span class="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="img"
                  value={user?.photoURL}
                  placeholder="Photo URL"
                  class="input input-bordered w-full max-w-xs font-bold pt-2"
                  {...register("img", {
                    required: true,
                  })}
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  placeholder="email"
                  class="input input-bordered w-full max-w-xs font-bold"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  value={user?.email}
                  placeholder="email"
                  class="input input-bordered w-full max-w-xs font-bold"
                  {...register("email", {
                    required: true,
                  })}
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Ratings</span>
                </label>
                <input
                  type="number"
                  name="ratings"
                  placeholder="Ratings"
                  class="input input-bordered w-full max-w-xs font-bold"
                  {...register(
                    "ratings",
                    {
                      required: true,
                    },
                    { min: 1, max: 5 }
                  )}
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Reviews</span>
                </label>
                <textarea
                  type="number"
                  name="reviews"
                  placeholder="Reviews"
                  class="textarea textarea-bordered w-full max-w-xs font-bold"
                  {...register(
                    "reviews",
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
                value="Add Review"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAReview
