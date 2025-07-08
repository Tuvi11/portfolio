import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 


const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new URLSearchParams();
  data.append("name", form.name.value);
  data.append("email", form.email.value);
  data.append("message", form.message.value);

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxAf9p6ZFBXqRLEiQ9Dx7qgv6D5Q-NE9YrbDhDfZvKB4Oiczs4laTGhlrJJJTpfs97qMw/exec"
      ,
      {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      }
    );

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (err) {
    console.error(err);
    alert("Failed to send message.");
  }
};


  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0f0f1b] text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-12"
    >
      
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/assets/phone.png"
          alt="Girl checking phone"
          className="w-80 sm:w-96 object-contain"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
      </div>

      
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center lg:text-left">
          Contact <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 mb-8 text-center lg:text-left">
          Have a question, a collaboration idea, or just want to connect? Fill
          out the form below! I'd love to hear from you!
        </p>

        <form
          className="bg-[#1a1a2e] p-6 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#0f0f1b] text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#0f0f1b] text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#0f0f1b] text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-medium py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
