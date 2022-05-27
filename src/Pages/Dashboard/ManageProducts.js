import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import auth from "../../firebase.init"

const ManageProducts = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?")
    if (proceed) {
      console.log("deleted", id)
      const url = `http://localhost:5000/product/${id}`
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted")
            const remaining = products.filter((product) => products._id !== id)
            setProducts(remaining)
          }
        })
    }
    window.location.reload()
  }

  const navigateToAddItem = () => {
    navigate("/dashboard/addaproduct")
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Min Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>
                  <img className="w-24 rounded-md" src={p.img} alt="" />
                </td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.instock}</td>
                <td>{p.minquantity}</td>
                <td>
                  <div>
                    <button
                      className="btn border-0"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center my-10">
        <button onClick={navigateToAddItem} className="btn border-0">
          Add Product
        </button>
      </div>
    </div>
  )
}

export default ManageProducts
