import React from "react";

const Contact = () => {
  return (
    <div>
      <p className="mt-4 text-center text-4xl font-bold">Contact</p>
      <section className="w-full min-h-[60vh] bg-gray-100 flex items-center justify-center px-6 lg:px-32">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            🚧 Work in Progress
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
            Currently under development. Exciting additions will be available
            here soon.
          </p>
          <div className="flex items-center justify-center gap-3 text-teal-600 font-medium">
            <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
            <span>Currently in Development…</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
