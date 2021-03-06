import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, Outlet } from "react-router-dom"
import auth from "../../firebase.init"
import useAdmin from "../../hooks/useAdmin"

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-center">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addareview">Add a Review</Link>
          </li>
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>

          {admin && (
            <>
              <li>
                <Link to="/dashboard/MakeAdmin">Manage Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/addaproduct">Add a Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manage">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/manageproducts">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
