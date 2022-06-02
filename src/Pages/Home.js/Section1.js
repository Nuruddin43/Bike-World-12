import React from "react";
import byc1 from "../../images/extrabicycle/albany-capture-nAhC09ZjgCg-unsplash.jpg";

const Section1 = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={byc1} className="max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">About our Company!!</h1>
          <p className="py-6">
            CTGBIKE was established in 2003 and provides bicycle OEM services.We
            have 19 years of bicycle manufacturing and exporting experience.The
            factory covers an area of more than 80,000 square meters, has more
            than 500 employees. Has a number of automatic bicycle welding,
            spraying, decals, assembly, packaging production line.
          </p>
          <button className="btn btn-primary">About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
