"use client";

import { useState } from "react";
import PantipRealTimeItem from "./PantipRealTimeItem";
import { ChevronDown, ChevronUp } from 'lucide-react';

const PantipPick = () => {
  const [showPtPickItem, setShowPtPickItem] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <PantipRealTimeItem
          imgSrc="/assets/images/pt-pick-img1.jpg"
          title="🤯 กิจกรรม “ซัมเมอร์นี้ไปไหนดี จูงมือคนที่บ้านไปเล่นสนุกไม่กลัวแดด” ตอบถูกใจทีมงานรับ Pantip point 50 คะแนน รวม 15 รางวัล"
          href="https://pantip.com/topic/42678800"
          memberName="The Tech Unicorn"
          createdAt={new Date()}
          commentLength={15}
          hiddenAddLength
        />
        <PantipRealTimeItem
          imgSrc="/assets/images/pt-pick-img2.jpg"
          title="🤯 รายชื่อกัปตันทีมแต่ละประเทศในvnl"
          subTitle="วอลเลย์บอลนักวอลเลย์บอลวอลเลย์บอลต่างประเทศวอลเลย์บอลไทยFIVB Volleyball Nations League"
          href="https://pantip.com/tag/%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%A2%E0%B9%8C%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B9%84%E0%B8%97%E0%B8%A2"
          memberName="สมาชิกหมายเลข 5772148"
          createdAt={new Date()}
          commentLength={19}
          hiddenAddLength
        />
        <PantipRealTimeItem
          imgSrc="/assets/images/pt-pick-img3.jpg"
          title="🤯 คอมเม้นเนติเซ็น-สื่อเกาหลี หลังเดตลิซ่ากับคุณเฟรดเดอริก และภาพไอจีลิซ่าล่าสุด"
          subTitle="ลลิษา มโนบาล (ลลิส)LLOUD (ค่ายเพลง)BLACKPINK (นักร้องนักดนตรี)K-POP"
          href="https://pantip.com/topic/42683204"
          memberName="LisaCool"
          createdAt={new Date()}
          commentLength={47}
          hiddenAddLength
        />
        <PantipRealTimeItem
          imgSrc="/assets/images/pt-pick-img4.jpg"
          title="🤯 เสื้อแข่งVNL2024มาแล้ว ให้กี่คะแนนคะเพี่ยนๆๆ"
          subTitle="วอลเลย์บอล"
          href="https://pantip.com/topic/42683275"
          memberName="สมาชิกหมายเลข 7009111"
          createdAt={new Date()}
          commentLength={119}
          hiddenAddLength
        />
        {showPtPickItem && (
          <>
            <PantipRealTimeItem
              imgSrc="/assets/images/pt-pick-img5.jpg"
              title="🤯 เชียร์สด ! แบดมินตัน TotalEnergies BWF Thomas & Uber Cup Finals 2024 : รอบก่อนรองชนะเลิศ [3 พ.ค. 67] (คู่แรก 8.30 น.)"
              subTitle="กีฬา แบดมินตัน เชียร์สด"
              href="https://pantip.com/topic/42684812"
              memberName="Stamp-Badminton"
              createdAt={new Date()}
              commentLength={98}
              hiddenAddLength
            />
            <PantipRealTimeItem
              title="🤯 อยากแชร์ การออมเงิน และ เป้าหมายในชีวิต ในแบบของผม"
              subTitle="การออมเงิน มนุษย์เงินเดือน การลงทุน การวางแผนการเงิน สุขภาพ"
              href="https://pantip.com/topic/42682705"
              memberName="สมาชิกหมายเลข 4952030"
              createdAt={new Date()}
              commentLength={33}
              hiddenAddLength
            />
          </>
        )}
      </div>
      <button
        onClick={() => setShowPtPickItem((prev) => !prev)}
        className="h-[65px] flex gap-x-4 justify-center items-center text-white bg-[#7459c8] hover:bg-[#7a64bd] transition cursor-pointer text-lg font-medium"
      >
        {showPtPickItem ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        {showPtPickItem ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
        {showPtPickItem ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
      </button>
    </>
  );
}

export default PantipPick;