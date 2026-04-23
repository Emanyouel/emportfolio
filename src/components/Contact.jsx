import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="scroll-m-20 bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <form className="max-w-2xl mx-auto space-y-6 bg-slate-50 rounded-[2rem] p-6 sm:p-10 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 text-center">
            Contact Form
          </h3>
          <div className="space-y-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="space-y-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-sky-600 px-4 py-3 text-white font-semibold hover:bg-sky-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
