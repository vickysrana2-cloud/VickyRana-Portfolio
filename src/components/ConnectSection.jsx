import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // install with npm i @emailjs/browser
import coffeeLover from "../assets/coffeeLover.svg";

export default function ConnectSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .send(
        "service_cue9hlw",
        "template_ncklxb2",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "mRvikAuL49meokDs-"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text & Illustration */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-4xl font-extrabold leading-snug">
            Got a project in <span className="text-cyan-400">mind?</span>
          </h2>
          <div className="w-72 lg:w-96">
            <img loading="lazy" src={coffeeLover} alt="Project Illustration" />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={handleSubmit} className="rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#2a3441] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#2a3441] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#2a3441] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          <button
            type="submit"
            className="flex items-center justify-center space-x-2 w-full md:w-auto px-6 py-3 backdrop-blur-2xl bg-white/10 text-white rounded-full hover:bg-white/20 transition duration-300"
          >
            <span>Send Message</span>
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
