import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import Autoplay from "embla-carousel-autoplay";
import { PhoneCall } from "lucide-react";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

// Import images
import image1 from "../../assets/img/hero/07.webp";
import image2 from "../../assets/img/hero/08.webp";
import image3 from "../../assets/img/hero/09.webp";
import patternImage from "../../assets/img/hero/shape-3.webp";
import shapeImage from "../../assets/img/Businessman.webp";
import blobImage from "../../assets/img/blob.webp"; // Import the background blob image

function HeroSection() {
  const images = [
    { src: image1, title: "Leading IT Solutions\nProvider" },
    { src: image2, title: "Expert IT Consulting \nServices" },
    { src: image3, title: "Innovative IT Solutions \nAgency" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      // ... AOS options
    });
  }, []);

  // Animation for the title
  const titleSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8) translateY(60px)" },
    to: { opacity: 1, transform: "scale(1) translateY(0px)" },
    config: { duration: 1000 },
    delay: 200,
    reset: true,
    onRest: () => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    },
  });

  // New Blob Animation
  const blobSpring = useSpring({
    from: {
      transform: "scale(2) translateY(0px) rotate(0deg)",
    },
    to: async (next) => {
      while (true) {
        await next({
          transform: "scale(2.2) translateY(0px) rotate(10deg)",
          config: { duration: 2000 },
        });
        await next({
          transform: "scale(2) translateX(20px) rotate(0deg)",
          config: { duration: 2000 },
        });
        await next({
          transform: "scale(1.8) translateY(20px) rotate(-10deg)",
          config: { duration: 2000 },
        });
        await next({
          transform: "scale(2) translateY(0px) rotate(0deg)",
          config: { duration: 2000 },
        });
      }
    },
  });

  // Modified Shape Image Animation
  const shapeSpring = useSpring({
    from: {
      transform: "translateY(0px) scale(1) rotate(0deg)",
    },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(-20px) scale(1.1) rotate(10deg)" });
        await next({ transform: "translateY(0px) scale(1) rotate(0deg)" });
        await next({ transform: "translateY(20px) scale(0.9) rotate(-10deg)" });
        await next({ transform: "translateY(0px) scale(1) rotate(0deg)" });
      }
    },
    config: { duration: 2000 },
  });

  // Animation for hover effect
  const hoverSpring = useSpring({
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  });

  // Handle hover events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Animation for the button
  const buttonSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 800 },
    delay: 600,
  });

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
        onSlideChange: (slideIndex) => setCurrentIndex(slideIndex),
      }}
      className="relative w-full"
    >
      <CarouselContent className="flex space-x-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full relative">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="h-auto w-full object-cover"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-6 bg-black bg-opacity-50">
              <div className="absolute left-0 top-0 h-full w-1/4">
                <img
                  src={patternImage}
                  alt="Pattern"
                  className="h-full w-full object-cover"
                  data-aos="fade-left"
                  data-aos-delay="200"
                />
              </div>
              <div className="flex justify-between items-center relative z-10 w-full px-4 md:px-2">
                <animated.h1
                  className="mx-3 text-white text-3xl xs:text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold whitespace-pre-line"
                  style={{
                    ...titleSpring,
                    fontWeight: 600,
                    lineHeight: "100%",
                    fontFamily: "Syne",
                  }}
                >
                  {image.title}
                </animated.h1>
                <div className="relative w-1/4 max-w-xs">
                  <animated.img
                    src={blobImage}
                    alt="Blob"
                    className="absolute inset-0 w-full h-full object-cover -ml-8"
                    style={{
                      ...blobSpring,
                      zIndex: -1,
                    }}
                  />
                  <animated.div
                    style={{ ...shapeSpring, ...hoverSpring }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative z-10 flex justify-center items-center"
                  >
                    <img
                      src={shapeImage}
                      alt="Shape"
                      className="w-full h-auto shape-img -ml-4"
                      data-aos="fade-right"
                      data-aos-delay="400"
                    />
                  </animated.div>
                </div>
              </div>
              <div className="flex mt-4 gap-6 sm:gap-5 mx-10 sm:mx-20">
                <animated.button
                  style={buttonSpring}
                  className="relative border hover:border-[#A80038] duration-500 group cursor-pointer overflow-hidden h-8 sm:h-10 md:h-14 w-32 sm:w-40 md:w-56 rounded-md bg-[#F4F6F6] p-1 sm:p-2 flex justify-center items-center font-extrabold"
                >
                  <div className="absolute z-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#2B2024] delay-150 group-hover:delay-75"></div>
                  <div className="absolute z-10 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#A80038] delay-150 group-hover:delay-100"></div>
                  <div className="absolute z-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#FD0054] delay-150 group-hover:delay-150"></div>
                  <div className="absolute z-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#FF005C] delay-150 group-hover:delay-200"></div>
                  <p className="z-10 text-xs sm:text-sm md:text-lg text-white">
                    Discover More
                  </p>
                </animated.button>

                <div className="flex items-center space-x-1 sm:space-x-2">
                  <PhoneCall
                    className="text-[#A80038]"
                    size={16}
                    strokeWidth={3}
                  />
                  <span className="text-white text-sm sm:text-lg md:text-xl font-bold">
                  +91 96538 20555
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/4">
              <img
                src={patternImage}
                alt="Pattern"
                className="h-full w-full object-cover"
                data-aos="fade-right"
                data-aos-delay="200"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300"
          onClick={() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
          }}
        >
          &gt;
        </button>
      </CarouselNext>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300"
          onClick={() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
          }}
        >
          &lt;
        </button>
      </CarouselPrevious>
    </Carousel>
  );
}

export default HeroSection;
