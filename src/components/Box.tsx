import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface BoxProps {
  children: React.ReactNode;
  label: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

const Box: React.FC<BoxProps> = ({
  children,
  label,
  icon: Icon
}) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="px-2 py-2 bg-gray-100 text-2xl text-pink-600 font-bold flex items-center justify-between">
        <div className="flex gap-x-2">
          <div className="p-2 rounded-full bg-gray-700 flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
          {label}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Box;