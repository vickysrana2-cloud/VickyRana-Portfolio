import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsivePreview from "../components/ResponsivePreview";

const images = [
  "https://media.istockphoto.com/id/1432896468/photo/3d-visualization-abstraction-of-a-color-wave.jpg?s=612x612&w=0&k=20&c=vWy7YP1NK1S7ITg1BDzDrsRnrfBxRsBLA-NmccD7Jik=",
  "https://media.istockphoto.com/id/1568454760/photo/rotation-of-the-blades-of-an-abstract-funnel-of-neon-colors-purple-and-blue-abstract.webp?a=1&s=612x612&w=0&k=20&c=HbRGqCveBPa17Tfpdm96W0G2UeNdl8KwA8F7tNRzPIQ=",
  "https://media.istockphoto.com/id/1201112368/photo/abstract-fractal-pink-wave.webp?a=1&s=612x612&w=0&k=20&c=TlIDOIVpk7sR7QSkKr_HSqF3g3kJ56fphT2r28KsuOo=",
  "https://images.unsplash.com/photo-1755076539245-42614526d518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/1304498075/photo/blue-purple-fluid-gradient-background.webp?a=1&s=612x612&w=0&k=20&c=tFZ6jw5cPusHS89anO7dBsl0WLOZEgYs6E3fBIUx6sU=",
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
                  className="w-full object-cover rounded-3xl h-[580px]"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Second div scrolls over the first div */}
        {/* <div className="relative z-20">
          {
            setOfUrl.map((u)=><ResponsivePreview url={u.url} />)
          }

        </div> */}

        <div className="relative z-20 text-white">
          <div className="bg-[radial-gradient(circle_at_center,_#5C4DB8_0%,_#0A1E46_60%,_#2E2A5D_10%)]">
            <ResponsivePreview url={setOfUrl[0].url} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            tenetur quia repellendus velit dignissimos corrupti magni. Facilis,
            fugit, voluptas pariatur eos repellat accusantium adipisci provident
            magni quasi, facere culpa quae nostrum labore quibusdam inventore.
            Autem, corrupti aliquid maiores eum, libero porro quibusdam enim
            ipsa ab dolor fugiat numquam aspernatur praesentium.
          </div>

          <div className="bg-[radial-gradient(circle_at_center,_#5C4DB8_0%,_#0A1E46_60%,_#2E2A5D_10%)]">
            <ResponsivePreview url={setOfUrl[1].url} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            tenetur quia repellendus velit dignissimos corrupti magni. Facilis,
            fugit, voluptas pariatur eos repellat accusantium adipisci provident
            magni quasi, facere culpa quae nostrum labore quibusdam inventore.
            Autem, corrupti aliquid maiores eum, libero porro quibusdam enim
            ipsa ab dolor fugiat numquam aspernatur praesentium.
          </div>

          <div className=" border-4 bg-[radial-gradient(circle_at_center,_#5C4DB8_0%,_#0A1E46_60%,_#2E2A5D_10%)]">
            <div className="">
              <ResponsivePreview url={setOfUrl[2].url} />
            </div>

            <div className="h-96 backdrop-blur-xs bg-black/25 rounded-2xl border-2 border-white/10">
            <p className=" text-2xl">
              dfslsdfsd
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
