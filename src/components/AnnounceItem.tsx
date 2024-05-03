import { cn } from "@/lib/utils";

interface AnnounceItemProps {
  href: string;
  headerLabel: string;
  headerBgColor: "yellow" | "purple";
  content: string;
  subContent: string;
}

const AnncounceItem: React.FC<AnnounceItemProps> = ({
  href,
  headerLabel,
  headerBgColor,
  content,
  subContent
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="px-4 py-4 bg-[#353156] hover:bg-[#2d2a49] transition relative overflow-hidden cursor-pointer border-b border-b-[rgba(233,229,246,.08)]"
    >
      <div className={cn(
        "hidden absolute top-3 -left-5 px-10 py-2 text-white md:flex items-center -rotate-45 text-[10px] shadow-md",
        headerBgColor === "yellow" ? "bg-[#ff9800]" : "bg-[#5c6bc0]"
      )}>
        {headerLabel}
      </div>
      <p className="text-lg text-yellow-300 md:pl-14">
        <span className="text-yellow-500">
          {content}
        </span>
        {subContent}
      </p>
    </a>
  );
}

export default AnncounceItem;