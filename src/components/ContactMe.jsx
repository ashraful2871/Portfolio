import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service details
    const serviceID = "service_tl7h00n"; // Replace with your EmailJS Service ID
    const templateID = "your_template_id"; // Replace with your EmailJS Template ID
    const publicKey = "6NhrUYYhU6BaqG2nK"; // Replace with your EmailJS Public Key

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Try again.");
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-[#D2B48C]">
        Contact Me
      </h2>
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 space-x-12">
        {/* Left Side: Contact Form */}
        <div className="w-full space-y-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-base mb-2 font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-base mb-2 font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-base mb-2 font-medium text-gray-300">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                rows="4"
                placeholder="Type Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 font-bold text-base text-black bg-[#D2B48C] hover:bg-[#C0A276] rounded-lg focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="border h-[420px] hidden lg:block"></div>
        {/* Right Side: Contact Details */}
        <div className="w-full space-y-6">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-[#D2B48C] text-xl" />
            <p className="text-gray-400 text-lg">+8801759030544</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-[#D2B48C] text-xl" />
            <p className="text-gray-400 text-lg">ashrafulislam2758@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-[#D2B48C] text-xl" />
            <p className="text-gray-400 text-lg">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
