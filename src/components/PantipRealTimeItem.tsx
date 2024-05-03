"use client";

import Image from "next/image";
import { MessageSquareMore, CirclePlus } from 'lucide-react';
import { format } from "date-fns";

interface PantipRealTimeItemProps {
  imgSrc?: string;
  title: string;
  subTitle?: string;
  href?: string;
  memberName: string;
  createdAt: Date;
  commentLength: number;
  addLength?: number;
  hiddenAddLength?: boolean;
}

const PantipRealTimeItem: React.FC<PantipRealTimeItemProps> = ({
  imgSrc,
  title,
  subTitle,
  href,
  memberName,
  createdAt,
  commentLength,
  addLength,
  hiddenAddLength
}) => {
  return (
    <div className="p-4 flex flex-col items-center gap-y-4 md:flex-row gap-x-4 bg-[#353156] hover:bg-[#2d2a49] transition border border-[rgba(233,229,246,.08)]">
      {imgSrc && (
        <a
          href={href}
          target="_blank"
          className="w-24 h-20 relative cursor-pointer rounded overflow-hidden"
        >
          <Image
            src={imgSrc}
            fill
            className="absolute"
            alt="pt-rt-img"
          />
        </a>
      )}
      <div className="flex-1 flex flex-col justify-between gap-y-6">
        <div className="flex flex-col gap-y-2">
          <a
            href={href}
            target="_blank"
            className="text-xl text-yellow-300 font-medium"
          >
            {title}
          </a>
          {subTitle && (
            <span className="text-sm text-gray-500">
              {subTitle}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row items-center justify-between">
          <div className="flex gap-x-3 items-center">
            <p className="text-sm text-gray-400 font-medium">
              {memberName}
            </p>
            <span className="text-[10px] text-gray-500">
              {format(new Date(createdAt), "dd MMMM yyyy")}
            </span>
          </div>
          <div className="flex gap-x-3 items-center">
            <div className="flex justify-center items-center gap-x-1 text-gray-400 text-sm">
              <MessageSquareMore className="h-4 w-4" />
              {commentLength}
            </div>
            {!hiddenAddLength && (
              <div className="flex justify-center items-center gap-x-1 text-gray-400 text-sm">
                <CirclePlus className="h-4 w-4" />
                {addLength}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PantipRealTimeItem;