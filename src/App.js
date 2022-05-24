import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home.js/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/purchase/:purchaseId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

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
