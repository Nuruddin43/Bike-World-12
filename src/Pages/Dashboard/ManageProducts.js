import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import auth from "../../firebase.init"
import DeleteConfirmModal from "./DeleteConfirmModal"

const ManageProducts = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null)
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const [user] = useAuthState(auth)
  useEffect(() => {
    fetch("https://pure-wave-91095.herokuapp.com/newProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const navigateToAddItem = () => {
    navigate("/dashboard/addaproduct")
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
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
              <tr key={p._id} setDeletingDoctor={setDeletingDoctor}>
                <td>
                  <img className="w-24 rounded-md" src={p.img} alt="" />
                </td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{p.order}</td>
                <td>
                  <div>
                    <label
                      onClick={() => setDeletingDoctor(p)}
                      htmlFor="my-modal-6"
                      className="btn btn-xs btn-error border-0"
                    >
                      Delete
                    </label>
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
      {deletingDoctor && (
        <DeleteConfirmModal
          deletingDoctor={deletingDoctor}
          setDeletingDoctor={setDeletingDoctor}
        ></DeleteConfirmModal>
      )}
    </div>
  )
}

export default ManageProducts
