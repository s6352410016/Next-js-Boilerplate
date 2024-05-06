"use client";

import { useRoomActionRoutes } from 'hooks/useRoomActionRoutes';
import 'react-multi-carousel/lib/styles.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import RoomAction from './RoomAction';

const RoomItems = () => {
  const routes = useRoomActionRoutes();

  return (
    <div className="px-4 lg:px-16">
      <Carousel
        opts={{
          align: "start"
        }}
        className="w-full"
      >
        <CarouselContent className='h-[110px]'>
          {routes.map((route) => (
            <CarouselItem
              key={route.label}
              className="basis-1/4 md:basis-[70px] lg:basis-20 cursor-pointer"
            >
              <RoomAction
                icon={route.icon}
                label={route.label}
                href={route.href}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default RoomItems;