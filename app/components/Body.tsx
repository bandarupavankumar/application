'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
const Body = () => {
    const imageUrls = [
      "/assets/carousel/1.jpg",
      "/assets/carousel/2.jpg",
      "/assets/carousel/3.jpg",
      "/assets/carousel/4.jpg",
      "/assets/carousel/5.jpg"
    ];
  
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
  
    return (
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset} // Use start instead of reset
      >
        <CarouselContent>
          {imageUrls.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <img
                      src={imageUrl}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    );
  };
  
  export default Body;