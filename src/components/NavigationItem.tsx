"use client";

import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface NavigationItemProps {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  label: string;
  href: string;
  active: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon: Icon,
  label,
  href,
  active
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "group px-2 py-2 flex flex-col justify-center items-center gap-y-2 cursor-pointer border-b-2 border-transparent hover:border-b-gray-200 transition",
        active && "border-b-white"
      )}
    >
      <Icon className="h-5 w-5 text-white group-hover:text-gray-200" />
      <p className="hidden md:flex text-white text-sm group-hover:text-gray-200">
        {label}
      </p>
    </div>
  );
}

export default NavigationItem;