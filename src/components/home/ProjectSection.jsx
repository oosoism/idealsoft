import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { StepForward } from 'lucide-react';

// Import images
import img1 from "../../assets/img/project/01.webp";
import img2 from "../../assets/img/project/03.webp";
import img3 from "../../assets/img/project/02.webp";
import img4 from "../../assets/img/project/04.webp";
import img5 from "../../assets/img/project/03.webp";
import img6 from "../../assets/img/project/05.webp";

const projects = [
  {
    title: "Digital Strategy",
    description: "Boosted online presence with expert consulting.",
    image: img1,
    rotation: "rotate-6",
  },
  {
    title: "Web Excellence",
    description: "Launched a high-performing website.",
    image: img2,
    rotation: "-rotate-12",
  },
  {
    title: "Marketing Magic",
    description: "Drove leads with precision marketing.",
    image: img3,
    rotation: "rotate-6",
  },
  {
    title: "Mobile Marvel",
    description: "Built an engaging mobile app.",
    image: img4,
    rotation: "-rotate-12",
  },
  {
    title: "E-commerce Edge",
    description: "Enhanced platform for sales lift.",
    image: img5,
    rotation: "rotate-6",
  },
  {
    title: "Social Success",
    description: "Amplified brand on social media.",
    image: img6,
    rotation: "-rotate-12",
  },
];

function ProjectSection() {
  return (
    <div className="flex justify-center mt-5 p-5">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full relative mt-2 p-2"
      >
        <CarouselPrevious className="absolute left-0 z-20 p-2 bg-black bg-opacity-20 text-white">
          Previous
        </CarouselPrevious>
        <CarouselContent className="flex -ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card className={`relative transform transition-transform duration-500 hover:scale-150 hover:shadow-lg ${project.rotation} hover:rotate-0 hover:-translate-y-12 mb-12`}> {/* Increased bottom margin */}
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="absolute rounded bottom-0 left-0 bg-black bg-opacity-30 text-white p-4 z-10 w-full md:w-auto flex items-center">
                      <StepForward className="mr-2" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        <p className="text-sm">{project.description}</p>
                      </div>
                    </div>
                    <img
                      src={project.image}
                      alt={`Image ${index + 1}`}
                      className="object-cover w-full h-72"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-0 z-20 p-2 bg-black bg-opacity-20 text-white">
          Next
        </CarouselNext>
      </Carousel>
    </div>
  );
}

export default ProjectSection;
