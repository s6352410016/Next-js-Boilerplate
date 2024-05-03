import { cn } from "@/lib/utils";

interface BoxProps {
  children: React.ReactNode;
  label: string;
  subLabel?: string;
  className?: string;
}

const Box: React.FC<BoxProps> = ({
  children,
  label,
  subLabel,
  className
}) => {
  return (
    <div className={cn(
      "flex flex-col justify-center border border-[#7976a0] rounded-lg overflow-hidden",
      className
    )}>
      <div className="px-4 py-4 bg-[#1f1d33] text-xl text-yellow-500 font-semibold">
        {label}
        <br />
        <span className="text-xs font-semibold text-gray-400">
        {subLabel}
        </span>
      </div>
      {children}
    </div>
  );
}

export default Box;