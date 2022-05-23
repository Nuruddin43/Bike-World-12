import React from "react";
import icon1 from "../../images/icon/coronavirus.png";
import icon2 from "../../images/icon/management.png";
import icon3 from "../../images/icon/customer-review.png";
import icon4 from "../../images/icon/feedback.png";

const Section2 = () => {
  return (
    <div className="mt-20">
      <h2 className="text-4xl text-center text-cyan-400 uppercase">
        We are Experts in Bicycle Manufacturer
        {/* Our professional team works to <br /> increase productivity and cost
        <br />
        effectiveness on the market!!! */}
        <br />
        <span className="text-2xl text-black uppercase">
          Try to understand users expectation
        </span>
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 mt-10">
        <div class="card max-w-lg bg-base-100 shadow-xl mx-auto">
          <div class="card-body hover:bg-sky-700 hover:text-white">
            <p>
              <img src={icon1} className="w-24 h-30 mx-auto" alt="" />
            </p>
            <h2 class="card-title mx-auto text"> 69+ Countries</h2>
            <p>
              It was in 2003 when a rapid industrialisation was taking place in
              Malaysia, leading to a crisis of workers. The need for a skilled
              workforce in factories, where many Bangladeshis worked, turned
              into a blessing the industry by providing in disguise for the
              bicycle manufacturing industry in Bangladesh, helping it to
              flourish.
            </p>
          </div>
        </div>
        <div class="card max-w-lg bg-base-100 shadow-xl mx-auto">
          <div class="card-body hover:bg-sky-700 hover:text-white">
            <p>
              <img src={icon2} className="w-24 h-30 mx-auto" alt="" />
            </p>
            <h2 class="card-title mx-auto">535+ Complete Projects</h2>
            <p>
              The project report includes Present Market Position and Expected
              Future Demand, Statistics, SWOT Analysis and Forecasts. Report
              provides a comprehensive analysis from industry covering detailed
              reporting and evaluates the position of the industry by providing
              insights to the SWOT analysis of the industry.
            </p>
          </div>
        </div>
        <div class="card max-w-lg bg-base-100 shadow-xl mx-auto">
          <div class="card-body hover:bg-sky-700 hover:text-white">
            <p>
              <img src={icon3} className="w-24 h-30 mx-auto" alt="" />
            </p>
            <h2 class="card-title mx-auto">305+ Happy Clients</h2>
            <p>
              we pride ourselves on our commitment to you and in providing the
              best possible service, helping offering training courses and group
              rides. In response to this continuing effort to better serve you,
              we have received numerous letters, emails and phone calls from
              satisfied company who we have helped to enjoy their shopping
              experience.
            </p>
          </div>
        </div>
        <div class="card max-w-lg bg-base-100 shadow-xl mx-auto">
          <div class="card-body hover:bg-sky-700 hover:text-white">
            <p>
              <img src={icon4} className="w-24 h-30 mx-auto" alt="" />
            </p>
            <h2 class="card-title mx-auto">432+ Feedbacks</h2>
            <p>
              Superb, cant say enough good things about this bike shop. We have
              bought a couple of bikes from them and they are extremely
              knowledgeable and very helpful helping us pick the right bikes for
              our needs. A recent example of superior customer service, one of
              the bike frames we purchased broke and they took care of working
              with the manufacturer to get a full replacement Great bike world!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
