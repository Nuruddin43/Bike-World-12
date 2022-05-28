import { Route, Routes } from "react-router-dom"
import "./App.css"
import About from "./Pages/About/About"
import Home from "./Pages/Home.js/Home"
import Reviews from "./Pages/Home.js/Reviews"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/Login/SignUp"
import Purchase from "./Pages/Purchase/Purchase"
import Navbar from "./Pages/Shared/Navbar"
import NotFound from "./Pages/Shared/NotFound"
import RequireAuth from "./Pages/Shared/RequireAuth"
import Blogs from "./Pages/Blogs/Blogs"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Dashboard from "./Pages/Dashboard/Dashboard"
import MyOrders from "./Pages/Dashboard/MyOrders"
import MakeAdmin from "./Pages/Dashboard/MakeAdmin"
import AddAReview from "./Pages/Dashboard/AddAReview"
import RequireAdmin from "./Pages/Login/RequireAdmin"
import AddAProduct from "./Pages/Dashboard/AddAProduct"
import MyPortfolio from "./Pages/Blogs/MyPortfolio/MyPortfolio"
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders"
import ManageProducts from "./Pages/Dashboard/ManageProducts"
import Payment from "./Pages/Dashboard/Payment"
import MyProfile from "./Pages/Dashboard/MyProfile"
// import Review from "./Pages/Home.js/Review"

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>

        <Route
          path="/myportfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route
          path="/purchase/:purchaseId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addareview" element={<AddAReview></AddAReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="MakeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addaproduct"
            element={
              <RequireAdmin>
                <AddAProduct></AddAProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App

/* Bicycle
https://i.ibb.co/Y7VHMjL/bike1.jpg
https://i.ibb.co/ccBpGks/bike2.jpg
https://i.ibb.co/ZM1mCqZ/bike3.jpg
https://i.ibb.co/RD03MV2/bike4.jpg
https://i.ibb.co/qxVBRDX/bike5.png
https://i.ibb.co/1Z7Tccj/bike6.png
https://i.ibb.co/xgpn0XS/bike7.jpg
https://i.ibb.co/MCnvMS2/bike8.jpg
https://i.ibb.co/cDqnr8V/26-inch-Steel-frame-shock-fork-27.jpg
https://i.ibb.co/ccBpGks/bike2.jpg
*/
// ctgBike
// W6ix4vMy9dDJM01e
