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
      className="flex flex-col items-center justify-center group gap-y-2 text-gray-500 text-xs transition mt-4 text-center relative"
    >
      <div className="flex items-center justify-center p-2 rounded-full bg-gray-700 group-hover:bg-pink-600">
        <Icon className="h-6 w-6 text-white" />
      </div>
      {label}
      <div className="hidden group-hover:flex absolute -bottom-[6px] w-5 h-[2px] bg-pink-600"/>
    </a>
  );
}

export default RoomAction;