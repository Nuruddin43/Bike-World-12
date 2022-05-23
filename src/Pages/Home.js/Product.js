import React from "react";

const Product = ({ product }) => {
  const { name, img, description, price } = product;
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto ">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title font-bold">{name}</h2>
        <p>{description}</p>
        <p className="font-bold">Price: ${price}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
