import React from "react"
import { toast } from "react-toastify"

const MakeAdminRow = ({ user, refetch }) => {
  const { email, role } = user

  const makeAdmin = () => {
    fetch(`https://pure-wave-91095.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch()
        toast.success("Successfully made an admin")
      })
  }
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  )
}

export default MakeAdminRow
