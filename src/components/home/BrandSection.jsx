import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"; // Adjust the path if necessary
import { Card, CardContent } from "../../components/ui/card"; // Example import for Card components
import brand1 from "../../assets/img/brand/01.webp";
import brand2 from "../../assets/img/brand/02.webp";
import brand3 from "../../assets/img/brand/03.webp";
import brand4 from "../../assets/img/brand/04.webp";
import brand5 from "../../assets/img/brand/05.webp";
import layerShape from "../../assets/img/layer-shape.webp";

const BrandSection = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5]; // Array of brand images

  return (
    <div className="brand-section-3  section-padding">
      <div className="layer-shape">
        <img src={layerShape} alt="shape-img" />
      </div>
      <div className="container-fluid">
        <div className="brand-wrapper style-3 flex justify-center">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="flex">
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                  <div className="w-100">
                    <Card>
                      <CardContent className="flex items-center justify-center">
                        <div className="">
                          <img
                            src={brand}
                            alt={`Brand ${index + 1}`}
                            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
