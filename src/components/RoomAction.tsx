"use client";

import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface RoomActionProps {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  label: string;
  href: string;
}

const RoomAction: React.FC<RoomActionProps> = ({
  icon: Icon,
  label,
  href
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-[hsla(0,_0%,_100%,_.12)] text-sm gap-y-2 text-white bg-[#353156] hover:bg-[#2d2a49] transition"
    >
      <Icon className="h-6 w-6" />
      {label}
    </a>
  );
}

export default RoomAction;