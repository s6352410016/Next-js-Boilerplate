"use client";

import Image from 'next/image';
import Search from './Search';
import { AlignJustify } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="h-16 bg-[#2d2a49] flex items-center justify-between">
      <div className="flex h-full items-center">
        <button className="w-20 flex items-center justify-center h-full hover:bg-[#3F3B67] transition">
          <Image
            src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png"
            width={50}
            height={50}
            alt="Logo"
          />
        </button>
      </div>
      <Search />
      <div className="hidden md:flex h-full items-center">
        <button className="w-[100px] flex items-center justify-center h-full hover:bg-[#3F3B67] transition text-white">
          ตั้งกระทู้
        </button>
        <button className="w-[100px] flex items-center justify-center h-full hover:bg-[#3F3B67] transition text-white">
          คอมมูนิตี้
        </button>
        <button className="w-[200px] flex items-center justify-center h-full hover:bg-[#3F3B67] transition text-white">
          เข้าสู่ระบบ / สมัครสมาชิก
        </button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <div
            className="w-7 h-7 cursor-pointer mr-4 flex items-center justify-center md:hidden"
          >
            <AlignJustify className="h-6 w-6 text-white" />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-[#2d2a49] border-transparent text-white p-0">
          <div className="p-4 flex flex-col gap-y-4 mt-6">
            <button className="w-full p-4 flex items-center justify-start hover:bg-[#3F3B67] transition text-white">
              ค้นหาบน Pantip
            </button>
            <button className="w-full p-4 flex items-center justify-start hover:bg-[#3F3B67] transition text-white">
              ตั้งกระทู้
            </button>
            <button className="w-full p-4 flex items-center justify-start hover:bg-[#3F3B67] transition text-white">
              คอมมูนิตี้
            </button>
            <button className="w-full p-4 flex items-center justify-start hover:bg-[#3F3B67] transition text-white">
              เข้าสู่ระบบ / สมัครสมาชิก
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;