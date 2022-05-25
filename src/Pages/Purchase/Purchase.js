import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [product, setProduct] = useState({});
  const [user, loading, error] = useAuthState(auth);
  if (user) {
    console.log(user);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      product: product.name,
      purchaseId: purchaseId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("Your Order is Booked!!!");
        event.target.reset();
      }
    });
  };
  useEffect(() => {
    const url = `http://localhost:5000/purchase/${purchaseId}`;
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <div class="card h-96  bg-base-100 shadow-xl mx-auto lg:mt-24 sm:mb-10 ">
        <div class="card-body items-center justify-center text-center ">
          <figure class="">
            <img src={product.img} alt="Shoes" class="rounded-xl" />
          </figure>
          <h2 class="card-title font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="font-bold">Price: ${product.price}</p>
          <div class="card-actions"></div>
        </div>
      </div>
      <div class="hero">
        <div class="card w-96 bg-base-100 shadow-xl ">
          <div class="card-body">
            <form onSubmit={onSubmit}>
              <div class="form-control w-full max-w-xs">
                <h2 className="text-4xl text-center font-bold">
                  Purchase The Product
                </h2>
                <label class="label">
                  <span class="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  readOnly
                  placeholder="name"
                  class="input input-bordered w-full max-w-xs font-bold"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  value={user?.email}
                  placeholder="email"
                  class="input input-bordered w-full max-w-xs font-bold"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Product</span>
                </label>
                <input
                  type="text"
                  value={product.name}
                  name="product"
                  placeholder="product"
                  class="input input-bordered w-full max-w-xs font-bold"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Available Stock</span>
                </label>
                <input
                  type="number"
                  value={product.instock}
                  name="availablestock"
                  placeholder="available quantity"
                  class="input input-bordered w-full max-w-xs font-bold"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Min Order Quantity</span>
                </label>
                <input
                  type="number"
                  value={product.minquantity}
                  name="minorderquantity"
                  placeholder="min order quantity"
                  class="input input-bordered w-full max-w-xs font-bold"
                />
              </div>

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  placeholder="$price"
                  class="input input-bordered w-full max-w-xs font-bold"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  class="input input-bordered w-full max-w-xs font-bold"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  class="input input-bordered w-full max-w-xs font-bold"
                />
              </div>

              <input
                className="btn mt-5 w-full max-w-xs text-white"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

//  {...register("name", {
//                   // required: {
//                   //   value: true,
//                   //   message: "Email is Required",
//                   // },
//                   // pattern: {
//                   //   value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                   //   message: "Provide a valid Email",
//                   // },
//                 })}
