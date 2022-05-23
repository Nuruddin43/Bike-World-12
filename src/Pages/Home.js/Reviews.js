import React from "react";
import Review from "./Review";
import people1 from "../../images/review/person1.png";
import people2 from "../../images/review/person2.png";
import people3 from "../../images/review/person3.png";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Thomas Muller",
      review:
        "Bike Ark is an Indian bicycle brand which was launched few years back. From their initial fixed gear bicycles this brand added geared hybrid bicycles in their 2018 range. Stylish design and colours has always been the core for all models from Bike A.",
      location: "Malta",
      img: people1,
    },
    {
      _id: 2,
      name: "Gerge Gnabry",
      review:
        " I ride this cycle daily to my office which is 3 km from my home. Occasionally I take it on long rides(25 to 40km...may be not so long ride!). It has comfortable sadle, powerful brakes, gears are efficient (Not complaining as it is super easy to fix with the barrel adjuster)",
      location: "california",
      img: people2,
    },
    {
      _id: 3,
      name: "Axel Witsel",
      review:
        " After riding 400km, I can say the bike is very good. The team at bikeark has successfully achieved making a bike that is inexpensive yet well designed and built. Individual parts that are used here are same as those used in some relatively more expensive products from Montra or Firefox and apart.",
      location: "Poland",
      img: people3,
    },
  ];
  return (
    <div>
      <h2 className="text-4xl text-center">What our Clients say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
