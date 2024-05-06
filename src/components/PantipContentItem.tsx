"use client";

import Image from "next/image";
import { Images } from 'lucide-react';
import type { Tags } from "types";
import { format } from "timeago.js";
import { useEffect, useState } from "react";

interface PantipRealTimeItemProps {
  imgSrc?: string;
  title: string;
  hrefContent?: number;
  hrefMember?: string;
  memberName: string;
  tags: Tags[];
  createdAt: Date;
}

const PantipContentItem: React.FC<PantipRealTimeItemProps> = ({
  imgSrc,
  title,
  hrefContent,
  hrefMember,
  memberName,
  tags,
  createdAt
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted){
    return null;
  }

  return (
    <div className="my-2 flex flex-col md:flex-row gap-x-2">
      {imgSrc ? (
        <div className="h-52 md:w-[150px] md:h-[100px] relative rounded overflow-hidden">
          <Image
            src={imgSrc}
            fill
            className="absolute"
            alt="pt-rt-img"
          />
        </div>
      ) : (
        <div className="h-52 md:w-[150px] md:h-[100px] rounded flex items-center justify-center bg-gray-100">
          <Images className="h-6 w-6 text-gray-500"/>
        </div>
      )}
      <div className="flex-1 flex flex-col gap-y-1">
        <a
          href={`https://pantip.com//topic/${hrefContent}`}
          target="_blank"
          className="text-base text-black font-bold hover:text-black/80 transition"
        >
          {title}
        </a>
        <div className="flex gap-x-2 items-center">
          <a
            href={`https://pantip.com/${hrefMember}`}
            target="_blank"
            className="text-sm text-gray-500 font-medium hover:text-gray-400 transition"
          >
            {memberName}
          </a>
          <span className="text-[11px] text-gray-400">
            {format(createdAt, "en_US")}
          </span>
        </div>
        <div className="flex gap-y-2 gap-x-2 items-center flex-wrap">
          {tags.map((tag, index) => (
            <div key={index} className="px-3 py-[1px] bg-gray-200 flex items-center justify-center text-xs rounded-full text-gray-600">
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PantipContentItem;