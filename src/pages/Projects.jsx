import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsivePreview from "../components/ResponsivePreview";
import slide1 from "../assets/slideImage/slide1.png";
import slide2 from "../assets/slideImage/slide2.png";
import slide3 from "../assets/slideImage/slide3.png";
import slide4 from "../assets/slideImage/slide4.png";
import slide5 from "../assets/slideImage/slide5.png";
import slide6 from "../assets/slideImage/slide6.png";
import slide7 from "../assets/slideImage/slide7.png";
import slide8 from "../assets/slideImage/slide8.png";
import slide9 from "../assets/slideImage/slide9.png";

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
];

const Projects = () => {
  const setOfUrl = [
    { url: "https://daily-planner-orpin.vercel.app/" },
    { url: "https://parking-lot-manager.vercel.app/" },
    { url: "https://vicky-rana-portfolio.vercel.app/" }, // This should be need to replace with deployeed url
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Slide animation duration in ms
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100, // Time each slide stays before moving
    arrows: false,
  };


  const projects = [
  {
    title: "Daily Planner App",
    description: "Shopping app with cart and checkout",
    tech: ["React", "CSS", "API"],
    github: ""
  },
  {
    title: "Parking lot Manager",
    description: "Shopping app with cart and checkout",
    tech: ["React", "CSS", "API"],
    github: ""
  },
  {
    title: "E-Commerce App",
    description: "Shopping app with cart and checkout",
    tech: ["React", "CSS", "API"],
    github: ""
  },
];


  return (
    <>
      <div className="relative">
        {/* Slider - sticky with 2px margin from top */}
        <div className="w-full h-[580px]  my-2 mx-auto sticky top-0 z-10">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className=" outline-none h-[580px]">
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="w-full object-cover rounded-3xl h-[580px] overflow-hidden"
                />
              </div>
            ))}
          </Slider>
        </div>


        <div className="relative z-20 text-white  bg-[radial-gradient(circle_at_center,_#5C4DB8_0%,_#0A1E46_60%,_#2E2A5D_10%)]">
          {               //----------------------16/12/25  this proDetail props need to resive at child component and utilyes .
            projects.map((d, i)=>(
              <ResponsivePreview key={i} url={setOfUrl[i]?.url} proDetail={d} />
              
            ))
          }

        </div>
      </div>
    </>
  );
};

export default Projects;
