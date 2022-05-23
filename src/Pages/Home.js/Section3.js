import React from "react";

const Section3 = () => {
  return (
    <div className="mt-16">
      <div class="hero min-h-screen bg-[url('https://i.ibb.co/MCvDVbb/byc2.jpg')]">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="card w-96 hover:bg-cyan-700 border-2 shadow-xl ">
              <div class="card-body items-center text-center">
                <h2 class="card-title text-6xl">World Class Technology</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <button class="btn btn-accent">More Info</button>
                </div>
              </div>
            </div>
            <div class="card w-96  hover:bg-cyan-700 border-2  shadow-xl ">
              <div class="card-body items-center text-center">
                <h2 class="card-title text-6xl">Quality Standard</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <button class="btn btn-accent">More Info</button>
                </div>
              </div>
            </div>
            <div class="card w-96  hover:bg-cyan-700 border-2 shadow-xl ">
              <div class="card-body items-center text-center">
                <h2 class="card-title text-6xl">Productive Capacity</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <button class="btn btn-accent">More Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
