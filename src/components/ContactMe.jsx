import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send email or save the data
    alert("Form submitted");
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-[#D2B48C]">
        Contact Me
      </h2>
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 space-x-12">
        {/* Left Side: Contact Form */}
        <div className="w-full  space-y-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className=" w-full py-2 px-4 text-black bg-[#D2B48C] hover:bg-[#C0A276] rounded-lg focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="border h-[420px] hidden lg:block"></div>
        {/* Right Side: Contact Details */}
        <div className="w-full space-y-6 ">
          <div className="flex items-center  space-x-3">
            <FaPhoneAlt className="text-[#D2B48C] text-xl" />
            <p className="text-gray-400 text-lg">+8801759030544</p>
          </div>
          <div className="flex items-center  space-x-3">
            <FaEnvelope className="text-[#D2B48C] text-xl" />
            <p className="text-gray-400 text-lg">ashrafulislam2758@gmail.com</p>
          </div>
          <div className="flex items-center  space-x-3">
            <FaMapMarkerAlt className="text-[#D2B48C] text-xl" />
            <p className="text-gray-400 text-lg">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
