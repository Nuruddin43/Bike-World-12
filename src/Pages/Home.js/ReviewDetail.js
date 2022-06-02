import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ReviewDetail = () => {
  const { reviewId } = useParams()
  const [review, setReview] = useState({})
  useEffect(() => {
    const url = `https://pure-wave-91095.herokuapp.com/review/${reviewId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data))
  }, [])
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-16 px-12">
        <div className="card-body">
          <p>{review.reviews}</p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.ratings} alt="" />
              </div>
            </div>
            <div>
              <h4 className="text-xl">{review.name}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewDetail
