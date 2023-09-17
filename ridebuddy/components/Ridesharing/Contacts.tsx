import React from "react";

const Contacts = () => {
  return (
    <div className="main-contact content h-screen flex justify-center items-center font-quicksand bg-blue-100">
      <div className="contact-form bg-opacity-90 backdrop-blur-md rounded-2xl w-96 h-96 p-4 flex flex-col gap-8 shadow-md">
        <h1 className="text-center text-xl">Contact Form</h1>
        <div className="contact-info flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border-none rounded-lg p-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border-none rounded-lg p-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Enter your Query"
              className="border-none rounded-lg p-4 resize-none"
            />
          </div>
        </div>
        <button className="bg-green-500 rounded-lg py-2 px-8 self-center text-white font-bold text-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contacts;
