import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [product, setProduct] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  useEffect(() => {
    const url = `http://localhost:5000/purchase/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <div class="card w-96 bg-base-100 shadow-xl mx-auto lg:mt-24 sm:mb-10 ">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <h2 className="text-4xl text-center font-bold">
                  Purchase The Product
                </h2>
                <label class="label">
                  <span class="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered w-full max-w-xs font-bold"
                  {...register("email", {
                    // required: {
                    //   value: true,
                    //   message: "Email is Required",
                    // },
                    // pattern: {
                    //   value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    //   message: "Provide a valid Email",
                    // },
                  })}
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    // required: {
                    //   value: true,
                    //   message: "password is Required",
                    // },
                    // minLength: {
                    //   value: 6,
                    //   message: "Must be 6 characters or longer",
                    // },
                  })}
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    // required: {
                    //   value: true,
                    //   message: "password is Required",
                    // },
                    // minLength: {
                    //   value: 6,
                    //   message: "Must be 6 characters or longer",
                    // },
                  })}
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    // required: {
                    //   value: true,
                    //   message: "password is Required",
                    // },
                    // minLength: {
                    //   value: 6,
                    //   message: "Must be 6 characters or longer",
                    // },
                  })}
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    // required: {
                    //   value: true,
                    //   message: "password is Required",
                    // },
                    // minLength: {
                    //   value: 6,
                    //   message: "Must be 6 characters or longer",
                    // },
                  })}
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