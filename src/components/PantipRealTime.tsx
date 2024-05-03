"use client";

import { useState } from "react";
import PantipRealTimeItem from "./PantipRealTimeItem";
import { ChevronDown, ChevronUp } from 'lucide-react';

const PantipRealTime = () => {
  const [showPtRtItem, setShowPtRtItem] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2">
        <PantipRealTimeItem
          imgSrc="/assets/images/pt-rt-img1.png"
          title="🤯 รู้ไหมว่ากัญชง เอามาทำเครื่องสำอางได้!"
          href="https://pantip.com/topic/42660321"
          memberName="สมาชิกหมายเลข 8117582"
          createdAt={new Date()}
          commentLength={1}
          addLength={0}
        />
        <PantipRealTimeItem
          imgSrc="/assets/images/pt-rt-img2.jpg"
          title="🤯 เชียร์สด ! แบดมินตัน TotalEnergies BWF Thomas & Uber Cup F"
          href="https://pantip.com/topic/42684812"
          memberName="Stamp-Badminton"
          createdAt={new Date()}
          commentLength={98}
          addLength={2}
        />
        <PantipRealTimeItem
          title="🤯 [จีบสาวไม่ติด]​ มีแฟนเจ้าของกิจการ​ มันต่างกับผู้ชายรวยจากเงินเดือนมากเลยเหรอครับ"
          href="https://pantip.com/topic/42666781"
          memberName="สมาชิกหมายเลข 8117582"
          createdAt={new Date()}
          commentLength={162}
          addLength={1}
        />
        <PantipRealTimeItem
          title="🤯 เราโกหกแฟน เรื่องเงินเดือน"
          href="https://pantip.com/topic/42681696"
          memberName="สมาชิกหมายเลข 6712740"
          createdAt={new Date()}
          commentLength={51}
          addLength={0}
        />
        <PantipRealTimeItem
          title="🤯 จะปฏิเสธ เพื่อนที่ทำงาน อย่างไร ให้ไม่เสียน้ำใจ หรือเสียเพื่อนดีคะ?"
          href="https://pantip.com/topic/42666781"
          memberName="สมาชิกหมายเลข 8118425"
          createdAt={new Date()}
          commentLength={29}
          addLength={0}
        />
        <PantipRealTimeItem
          imgSrc="/assets/images/pt-rt-img3.jpg"
          title="🤯 บัญชีโดนอายัดด้วยตำรวจ สภ……. อายัดแบบนี้ได้หรอครับ"
          href="https://pantip.com/topic/42681211"
          memberName="สมาชิกหมายเลข 4433528"
          createdAt={new Date()}
          commentLength={40}
          addLength={1}
        />
        <PantipRealTimeItem
          title="🤯 ขอสปอยล์ ลมเล่นไฟ จุดจบคนอย่างเฟลม"
          href="https://pantip.com/topic/42637183"
          memberName="chilli"
          createdAt={new Date()}
          commentLength={26}
          addLength={0}
        />
        <PantipRealTimeItem
          imgSrc="/assets/images/pt-rt-img4.jpg"
          title="🤯 ค่าดอกเบี้ยจาก Citibank -> UOB มาจากไหน ทั้งที่จ่ายบิลเต็มจำนวนก่อนกำหนด"
          href="https://pantip.com/topic/42681211"
          memberName="ลำดวนกวนลำใย"
          createdAt={new Date()}
          commentLength={43}
          addLength={1}
        />
        <PantipRealTimeItem
          title="🤯 พ่อใหญ่รักมากก็แค้นมาก หรือนี่คือเหตุผลที่ไม่เลือกมือเซตสาวไทยในการ tryout ครั้งนี้"
          href="https://pantip.com/topic/42683809"
          memberName="heliconia"
          createdAt={new Date()}
          commentLength={33}
          addLength={0}
        />
        <PantipRealTimeItem
          imgSrc="/assets/images/pt-rt-img5.jpg"
          title="🤯 เปลี่ยนคอมแอร์ แพงไปไหม ครับ"
          href="https://pantip.com/topic/42678581"
          memberName="สมาชิกหมายเลข 5419419"
          createdAt={new Date()}
          commentLength={46}
          addLength={0}
        />
        {showPtRtItem && (
          <>
            <PantipRealTimeItem
              imgSrc="/assets/images/pt-rt-img6.jpg"
              title="🤯 One Piece Spoil 1,114"
              href="https://pantip.com/topic/42681986"
              memberName="WhisBounty"
              createdAt={new Date()}
              commentLength={36}
              addLength={4}
            />
            <PantipRealTimeItem
              imgSrc="/assets/images/pt-rt-img7.jpg"
              title="🤯 ARMY เกาหลี ส่งพวงหรีดไปยังตึก HYBE + แถลงการณ์ลงหนังสือพิมพ์ “เราสนับสนุน BTS"
              href="https://pantip.com/topic/42684982"
              memberName="สมาชิกหมายเลข 8097501"
              createdAt={new Date()}
              commentLength={6}
              addLength={5}
            />
            <PantipRealTimeItem
              imgSrc="/assets/images/pt-rt-img8.jpg"
              title="🤯 ไก่ วิมลรัตน์ ไม่พร้อมตรงไหน"
              href="https://pantip.com/topic/42684883"
              memberName="สมาชิกหมายเลข 7916741"
              createdAt={new Date()}
              commentLength={17}
              addLength={0}
            />
            <PantipRealTimeItem
              imgSrc="/assets/images/pt-rt-img9.jpg"
              title="🤯 คอมเม้นเนติเซ็น-สื่อเกาหลี หลังเดตลิซ่ากับคุณเฟรดเดอริก และภาพไอจีลิซ่าล่าสุด"
              href="https://pantip.com/topic/42683204"
              memberName="LisaCool"
              createdAt={new Date()}
              commentLength={47}
              addLength={15}
            />
            <PantipRealTimeItem
              title="🤯 อยากถามว่า หัวหน้างานมีสิทะิ์ไม่อนุมัติการลาพักผ่อนไปต่างประเทศ ด้วยเหตุผลแบบนี้ได้ไหม"
              href="https://pantip.com/topic/42683274"
              memberName="Nah"
              createdAt={new Date()}
              commentLength={41}
              addLength={0}
            />
            <PantipRealTimeItem
              imgSrc="/assets/images/pt-rt-img10.jpg"
              title="🤯 มีเหตุผลอะไรบ้างที่อินเดียเลือก บข.หลัก เป็น SU-30MKI ครับ ทำไมไม่ใช่ F-15,F-18"
              href="https://pantip.com/topic/42684305"
              memberName="Street Kings"
              createdAt={new Date()}
              commentLength={5}
              addLength={0}
            />
          </>
        )}
      </div>
      <button
        onClick={() => setShowPtRtItem((prev) => !prev)}
        className="h-[65px] flex gap-x-4 justify-center items-center text-white bg-[#7459c8] hover:bg-[#7a64bd] transition cursor-pointer text-lg font-medium"
      >
        {showPtRtItem ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        {showPtRtItem ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
        {showPtRtItem ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
      </button>
    </>
  );
}

export default PantipRealTime;