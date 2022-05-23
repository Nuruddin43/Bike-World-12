import React from "react";
import partner1 from "../../images/sponsor/partners_item_1.png";
import partner2 from "../../images/sponsor/partners_item_2.png";
import partner3 from "../../images/sponsor/partners_item_3.png";
import partner4 from "../../images/sponsor/partners_item_4.png";
import partner5 from "../../images/sponsor/partners_item_5.png";
import partner6 from "../../images/sponsor/pg1.jpg";
import partner7 from "../../images/sponsor/pg2.jpg";
import partner8 from "../../images/sponsor/pg3.jpg";
import partner9 from "../../images/sponsor/pg4.jpg";
import partner10 from "../../images/sponsor/pg5.jpg";

const Section4 = () => {
  return (
    <div className="my-12">
      <p className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-20">
        <img src={partner1} alt="" />
        <img src={partner7} alt="" />
        <img src={partner3} alt="" />
        <img src={partner8} alt="" />

        <img src={partner5} alt="" />
        <img src={partner6} alt="" />
        <img src={partner2} alt="" />
        <img src={partner9} alt="" />
        <img src={partner4} alt="" />

        <img src={partner10} alt="" />
      </p>
    </div>
  );
};

export default Section4;
