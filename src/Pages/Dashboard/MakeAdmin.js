import React from "react"
import { useQuery } from "react-query"
import Loading from "../Shared/Loading"
import MakeAdminRow from "./MakeAdminRow"

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  )
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h2>All Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <MakeAdminRow
                key={user._id}
                user={user}
                refetch={refetch}
              ></MakeAdminRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MakeAdmin
