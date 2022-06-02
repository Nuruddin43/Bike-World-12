import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"

import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import Loading from "../Shared/Loading"
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe(
  "pk_test_51L1GfrL5x1PqRDImFqrYR6vQ6uE81qtIiI5ZqnEiekrf2BRzqWhGPkTgNvPdoiHOicNBFl94wwjvDkuel2PvgZTy00qd8VCA6p"
)

const Payment = () => {
  const { id } = useParams()
  const url = `https://pure-wave-91095.herokuapp.com/order/${id}`
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  )
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 ">
        <div className="card-body ">
          <p className="text-2xl text-success">Hello, {order.name}</p>
          <h2 className="text-3xl">Please Pay for {order.product}</h2>
          <p>
            Delivered pick point at
            <span className="text-purple-500 pl-2">{order.address}</span>
          </p>
          <p>Please Pay ${order.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  )
}

export default Payment
