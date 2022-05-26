import React, { useEffect, useState } from "react"
import axios from "axios"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"

const MyOrders = () => {
  const [user] = useAuthState(auth)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email
      const url = `http://localhost:5000/order?email=${email}`
      const { data } = await axios.get(url)
      setOrders(data)
    }
    getOrders()
  }, [user])
  return (
    <div>
      <h2>total Orders: {orders.length}</h2>
      <div class="overflow-x-auto px-2">
        <table class="sm:table table-zebra w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{o.product}</td>
                <td>{o.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
