import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import auth from "../../firebase.init"

const ManageAllOrders = () => {
  const [manageOrders, setManageOrders] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      fetch("http://localhost:5000/order", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setManageOrders(data)
        })
    }
  }, [user])
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Quantity</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {manageOrders.map((m, index) => (
              <tr key={m._id}>
                <td>{index + 1}</td>
                <td>{m.name}</td>
                <td>{m.address}</td>
                <td>{m.phone}</td>
                <td>{m.product}</td>
                <td>{m.quantity}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageAllOrders
