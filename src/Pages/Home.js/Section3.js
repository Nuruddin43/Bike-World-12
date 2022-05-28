import React from "react"

const Section3 = () => {
  return (
    <div className="mt-16">
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/Bc0NfNk/byc1.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card w-96 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white border-2 shadow-xl ">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-6xl">World Class Technology</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-accent">More Info</button>
                </div>
              </div>
            </div>
            <div className="card w-96  hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white border-2  shadow-xl ">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-6xl">Quality Standard</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-accent">More Info</button>
                </div>
              </div>
            </div>
            <div className="card w-96  hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white border-2 shadow-xl ">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-6xl">Productive Capacity</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-accent">More Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
