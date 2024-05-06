"use client";

import HightLightItem from './HightLightItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { HightlightData } from 'types';

interface HightLightProps {
  data: HightlightData[];
};

const HightLight: React.FC<HightLightProps> = ({ data }) => {
  return (
    <div className="my-10 px-4 lg:px-[60px]">
      <h1 className="text-2xl text-pink-600 font-bold my-4">Hightlight</h1>
      <Carousel
        opts={{
          align: "start"
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.map((hightlight) => (
            <CarouselItem
              key={hightlight.post_url}
              className="basis-full md:basis-1/4"
            >
              <HightLightItem
                name={hightlight.name}
                image_url={hightlight.image_url[2] as string}
                post_url={hightlight.post_url}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default HightLight;