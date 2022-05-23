// import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Ocean D42",
      price: "1140",
      description:
        "Mountain bike 24 inch Steel frame Steel fork Cheap MTB Speed",
      img: "https://i.ibb.co/Y7VHMjL/bike1.jpg",
      instock: 55000,
      orderquantity: 0,
    },
    {
      id: 2,
      name: "Phoenix SR100",
      price: "1140",
      description: "27.5 inch Alloy Dual suspension Full suspension 27 speed",
      img: "https://i.ibb.co/ccBpGks/bike2.jpg",
      instock: 69000,
      orderquantity: 0,
    },
    {
      id: 3,
      name: "Trivago 9R",
      price: "1140",
      description:
        "24 inch Steel frame shock fork 27 speed Internal cable lockout",
      img: "https://i.ibb.co/ZM1mCqZ/bike3.jpg",
      instock: 150000,
      orderquantity: 0,
    },
    {
      id: 4,
      name: "Royal CHR2",
      price: "1140",
      description: "High quality OC-M26182DA cheap price 26 inch mountain bike",
      img: "https://i.ibb.co/RD03MV2/bike4.jpg",
      instock: 95000,
      orderquantity: 0,
    },
    {
      id: 5,
      name: "Renova 21L",
      price: "1140",
      description:
        "Mountain bike 24 inch Steel frame Steel fork Cheap MTB Speed",
      img: "https://i.ibb.co/cDqnr8V/26-inch-Steel-frame-shock-fork-27.jpg",
      instock: 105000,
      orderquantity: 0,
    },
    {
      id: 6,
      name: "Climax XV2",
      price: "1140",
      description:
        "Mountain bike 35 inch Steel frame Steel dsdes Cheap powerful Speed",
      img: "https://i.ibb.co/ccBpGks/bike2.jpg",
      instock: 80000,
      orderquantity: 0,
    },
  ];

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  return (
    <div className="mt-12">
      <h2 className="text-5xl text-center">Our Products</h2>
      <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
