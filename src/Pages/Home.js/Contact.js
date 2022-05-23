import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-300 px-10 py-10 justify-around items-center lg:flex">
      <div className="text-center pb-14 text-black">
        <p className="text-4xl">Call Us</p>
        <br />
        <p className="font-bold">📱 646-872-4210</p>
        <p>
          <small>Don’t hesitate to contact us</small>
        </p>
        <br />
        <p className="font-bold">🕑 646-872-4210</p>
        <p>
          <small>Don’t hesitate to contact us</small>
        </p>
        <br />
        <p className="font-bold">🚩 Factory Address</p>
        <p>
          <small>5022 Forest Avenue</small>
        </p>
        <p>
          <small>Chittagong</small>
        </p>
        <p>
          <small>10013</small>
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-5">
        <h1 className="text-4xl text-black">Stay connected with us</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
