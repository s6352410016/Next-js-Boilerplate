"use client";

import RoomAction from './RoomAction';
import { useRoomActionRoutes } from 'hooks/useRoomActionRoutes';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 20
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 17
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4
  }
};

const RoomItems = () => {
  const routes = useRoomActionRoutes();

  return (
    <Carousel
      draggable={false}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {routes.map((route, index) => (
        <RoomAction
          key={index}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </Carousel>
  );
}

export default RoomItems;