"use client";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HightLightItem from './HightLightItem';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const HightLight = () => {
  return (
    <div className="p-4 bg-[#353156]">
      <Carousel
        draggable={false}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <HightLightItem
          imgSrc="/assets/images/hl-img1.png"
          content="[Pantip Point] กินอะไรคิดไม่ออก? แต่แจกพอยต์ตลอดมาตรงนี้ 😉🍳🍜🍦"
          href="https://pantip.com/topic/42682658"
        />
        <HightLightItem
          imgSrc="/assets/images/hl-img2.png"
          content="🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิป"
          href="https://www.youtube.com/watch?v=NKNmlaTZczc&list=PLQx8BhbFtXTFbGWM0OuS2vo-jPBaiggjO&index=1"
        />
        <HightLightItem
          imgSrc="/assets/images/hl-img3.jpg"
          content="แชร์งานบ้านที่รัก ลุ้นรับ pantip point 50"
          href="https://pantip.com/topic/42669111"
        />
        <HightLightItem
          imgSrc="/assets/images/hl-img4.jpg"
          content="🚩กิจกรรม “ซัมเมอร์นี้ไปไหนดี จูงมือคนที่"
          href="https://pantip.com/topic/42678800"
        />
        <HightLightItem
          imgSrc="/assets/images/hl-img5.png"
          content="Pantip Pick of the Year 2023 - รวม 10 สุดยอดกระทู้"
          href="https://pantip.com/topic/42397924"
        />
        <HightLightItem
          imgSrc="/assets/images/hl-img6.jpg"
          content="ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับ"
          href="https://pantip.com/topic/42281658"
        />
        <HightLightItem
          imgSrc="/assets/images/hl-img7.jpg"
          content="พันทิปนานุกรม … ชวนมาดู Cover Design วัน"
          href="https://pantip.com/topic/41930072"
        />
      </Carousel>
    </div>
  );
}

export default HightLight;