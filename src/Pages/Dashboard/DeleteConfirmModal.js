import React, { useState } from "react"
import { toast } from "react-toastify"

const DeleteConfirmModal = ({ deletingDoctor, setDeletingDoctor, refetch }) => {
  const [products, setProducts] = useState([])
  const { name, _id } = deletingDoctor

  const handleDelete = () => {
    const proceed = window.confirm("Are you sure to delete?")
    if (proceed) {
      console.log("deleted", _id)

      const url = `http://localhost:5000/product/${_id}`
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted")
            toast.success("succesfully deleted")
            const remaining = products.filter((product) => products._id !== _id)
            refetch()
            setDeletingDoctor(null)
            setProducts(remaining)
          }
        })
    }
    window.location.reload()
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete ${name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              className="btn btn-xs btn-error border-0"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
            <label htmlFor="my-modal-6" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal
