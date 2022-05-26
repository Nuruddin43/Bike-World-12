import React from "react"
import { useQuery } from "react-query"
import Loading from "../Shared/Loading"
import MyProfileRow from "./MyProfileRow"

const MyProfile = () => {
  const { data: users, isLoading } = useQuery("users", () =>
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
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <MyProfileRow key={user._id} user={user}></MyProfileRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyProfile
