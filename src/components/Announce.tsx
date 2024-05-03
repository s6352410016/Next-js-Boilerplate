"use client";

import AnncounceItem from "./AnnounceItem";
import Box from "./Box";

const Announce = () => {

  return (
    <div className="max-w-[1700px] w-full mx-auto mt-5">
      <Box label="Announce">
        <AnncounceItem
          href="https://www.youtube.com/watch?v=4MxbnXqKTEk&list=PLQx8BhbFtXTFbGWM0OuS2vo-jPBaiggjO&index=2"
          headerLabel="Hightlight"
          headerBgColor="yellow"
          content="🎧 Pantip Daily Podcast 🎧"
          subContent="3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 28 เมษายน 📊"
        />
        <AnncounceItem
          href="https://pantip.com/topic/42682658"
          headerLabel="Activity"
          headerBgColor="purple"
          content="Pantip Point 💰"
          subContent="กินอะไรคิดไม่ออก? แต่แจกพอยต์ตลอดมาตรงนี้ 😉🍳🍜🍦"
        />
      </Box>
    </div>
  );
}

export default Announce;