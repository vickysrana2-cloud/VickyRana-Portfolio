import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://media.istockphoto.com/id/1432896468/photo/3d-visualization-abstraction-of-a-color-wave.jpg?s=612x612&w=0&k=20&c=vWy7YP1NK1S7ITg1BDzDrsRnrfBxRsBLA-NmccD7Jik=",
  "https://media.istockphoto.com/id/1568454760/photo/rotation-of-the-blades-of-an-abstract-funnel-of-neon-colors-purple-and-blue-abstract.webp?a=1&s=612x612&w=0&k=20&c=HbRGqCveBPa17Tfpdm96W0G2UeNdl8KwA8F7tNRzPIQ=",
  "https://media.istockphoto.com/id/1201112368/photo/abstract-fractal-pink-wave.webp?a=1&s=612x612&w=0&k=20&c=TlIDOIVpk7sR7QSkKr_HSqF3g3kJ56fphT2r28KsuOo=",
  "https://images.unsplash.com/photo-1755076539245-42614526d518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/1304498075/photo/blue-purple-fluid-gradient-background.webp?a=1&s=612x612&w=0&k=20&c=tFZ6jw5cPusHS89anO7dBsl0WLOZEgYs6E3fBIUx6sU=",
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
      <div className="relative">
        {/* Slider - sticky with 2px margin from top */}
        <div className="w-full my-0.5 mx-auto sticky top-0 z-10">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="outline-none">
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Second div scrolls over the first div */}
        <div className="h-screen bg-cyan-600 relative -mt-2 z-20">
          this is test scroll
        </div>
      </div>

      {/* <div className="w-full my-2 mx-auto relative top-0 ">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="outline-none ">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
    <div className="h-52 bg-cyan-600">
      this is test scroll
    </div> */}
    </>
  );
};

export default Projects;
