import React from "react";
import notfound from "../../images/computer.png";

const NotFound = () => {
  return (
    <div className="mt-20">
      <p>
        <img src={notfound} className="w-24 h-24 mx-auto" alt="" />
      </p>
      <h2 className="text-4xl text-center">
        Oops! We can't find the page you're looking for.
      </h2>
    </div>
  );
};

export default NotFound;
