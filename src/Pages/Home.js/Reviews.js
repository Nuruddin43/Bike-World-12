import axios from "axios"
import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import Loading from "../Shared/Loading"
import Review from "./Review"

const Reviews = () => {
  const [user, loading] = useAuthState(auth)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getReview = async () => {
      const url = `http://localhost:5000/review`
      const { data } = await axios.get(url)
      setReviews(data)
    }
    getReview()
  }, [user])

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className="text-4xl text-center">What our Clients say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  )
}

export default Reviews
