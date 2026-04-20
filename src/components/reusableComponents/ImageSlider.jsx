import { useState, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-[#0f0f0f] relative lg:top-10 lg:right-8 border-8 border-gray-800 rounded-2xl shadow-lg p-3 lg:w-[400px] w-64 flex items-center justify-center overflow-hidden">

      {/* Image */}
      <img
        src={images[index]}
        alt="project"
        className="rounded-xl border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-all duration-500"
      />

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 text-white bg-black/50 p-1  rounded-full hover:bg-black"
      >
        <IoIosArrowDropleft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 text-white bg-black/50 p-1  rounded-full hover:bg-black"
      >
        <IoIosArrowDropright /> 
      </button>
    </div>
  );
}