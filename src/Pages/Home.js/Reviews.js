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
      review: "",
      location: "Malta",
      img: people1,
    },
    {
      _id: 2,
      name: "Gerge Gnabry",
      review: "",
      location: "california",
      img: people2,
    },
    {
      _id: 3,
      name: "Axel Witsel",
      review: "",
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
