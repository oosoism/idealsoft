import React from "react";
import projectImage04 from "../../assets/img/project/04.webp";
import projectImage09 from "../../assets/img/project/09.webp";
import projectImage10 from "../../assets/img/project/10.webp";
import projectImage11 from "../../assets/img/project/11.webp";
import projectImage12 from "../../assets/img/project/12.webp";
import projectImage14 from "../../assets/img/project/14.webp";
import projectImage15 from "../../assets/img/project/15.webp";
import projectImage16 from "../../assets/img/project/16.webp";

const projects = [
  {
    image: projectImage14,
    title: "Strategic Digital Consulting",
    location: "India",
    link: "/services/digital-consulting",
  },
  {
    image: projectImage15,
    title: "Innovative Digital Solutions",
    location: "India",
    link: "/services/digital-solutions",
  },
  {
    image: projectImage16,
    title: "Data-Driven Digital Strategy",
    location: "India",
    link: "/services/data-driven-strategy",
  },
  {
    image: projectImage10,
    title: "Comprehensive Digital Services",
    location: "India",
    link: "/services/comprehensive-services",
  },
  {
    image: projectImage11,
    title: "Custom Digital Consulting",
    location: "India",
    link: "/services/custom-consulting",
  },
  {
    image: projectImage12,
    title: "Advanced Digital Consultancy",
    location: "India",
    link: "/services/advanced-consultancy",
  },
  {
    image: projectImage04,
    title: "Expert Digital Advisory",
    location: "India",
    link: "/services/expert-advisory",
  },
  {
    image: projectImage09,
    title: "Digital Transformation Services",
    location: "India",
    link: "/services/digital-transformation",
  },
];

function PortfolioSection() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 p-5">
      {projects.map((project, index) => (
        <div
          key={index}
          className="h-[15em] w-[20em] bg-white m-auto rounded-[1em] relative group p-4 z-0 overflow-hidden"
          style={{ transition: "opacity 0.3s ease" }} // CSS transition for opacity
        >
          {/* Sliced Background elements for hover effects */}
          <div className="h-full w-1/5 absolute left-0 bottom-full z-[-1] group-hover:translate-y-full duration-500">
            <img
              src={project.image}
              alt={`${project.title} Part 1`}
              className="h-full w-full object-cover opacity-50"
              style={{ objectPosition: "left top", objectFit: "cover" }}
            />
          </div>
          <div className="h-1/3 w-full absolute left-[120%] top-0 z-[-1] group-hover:-translate-x-full duration-500">
            <img
              src={project.image}
              alt={`${project.title} Part 2`}
              className="h-full w-full object-cover opacity-50"
              style={{ objectPosition: "right top", objectFit: "cover" }}
            />
          </div>
          <div className="h-1/3 w-full absolute right-[100%] top-1/3 z-[-1] group-hover:translate-x-full duration-500">
            <img
              src={project.image}
              alt={`${project.title} Part 3`}
              className="h-full w-full object-cover opacity-50"
              style={{ objectPosition: "left bottom", objectFit: "cover" }}
            />
          </div>
          <div className="h-full w-4/5 absolute left-[20%] top-full z-[-1] group-hover:-translate-y-[33.3%] duration-500">
            <img
              src={project.image}
              alt={`${project.title} Part 4`}
              className="h-full w-full object-cover opacity-50"
              style={{ objectPosition: "right bottom", objectFit: "cover" }}
            />
          </div>

          {/* Project title */}
          <h1 className="z-20 font-bold text-xl text-gray-800 group-hover:text-grey delay-100 bg-white p-2 rounded duration-100 mt-4">
            {project.title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default PortfolioSection;
