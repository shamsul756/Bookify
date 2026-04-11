import React from "react";
import heroPhoto from "../../image/hero.png";

const HeroPage = () => {
  return (
    <div className="min-h-[70vh] rounded-2xl mx-auto container bg-gradient-to-br from-cyan-200 via-white to-fuchsia-100 shadow-md flex items-center justify-center">
      <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-between gap-10 px-6 py-10">

        {/* Image */}
        <img
          src={heroPhoto}
          alt="Hero books"
          className="w-full max-w-xs sm:max-w-sm rounded-2xl shadow-xl object-cover"
        />

        {/* Text Content */}
        <div className="space-y-5 max-w-xl text-center lg:text-left">

          {/* Badge */}
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full">
            New Arrivals
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-cyan-950">
            Books to freshen up{" "}
            <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-700">
              your bookshelf
            </span>
          </h1>

          {/* Divider */}
          <div className="flex gap-2 justify-center lg:justify-start">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-900 to-emerald-500 rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-900 rounded-full" />
          </div>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            Refresh your bookshelf with stories that inspire new ideas.
            Revisit old favorites that still feel like home.
          </p>

          {/* Button */}
          <button className="px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-green-600 to-green-900 rounded-xl hover:scale-105 transition-transform duration-200 cursor-pointer shadow-md">
            View The List
          </button>

        </div>
      </div>
    </div>
  );
};

export default HeroPage;