import { Skeleton } from "@/components/ui/skeleton";
import type { Tags } from "types";

interface PantipContentItemSkeletonProps {
  tags: Tags[];
}

const PantipContentItemSkeleton: React.FC<PantipContentItemSkeletonProps> = ({ tags }) => {
  return (
    <div className="my-2 flex flex-col md:flex-row gap-x-2">
      <div className="h-52 md:w-[150px] md:h-[100px] rounded overflow-hidden">
        <Skeleton className="h-full w-full bg-gray-500/30" />
      </div>
      <div className="flex-1 flex flex-col gap-y-1">
        <div className="text-base text-black font-bold hover:text-black/80 transition mt-2 md:mt-0">
          <Skeleton className="h-4 w-3/4 bg-gray-500/30" />
        </div>
        <div className="flex gap-x-2 items-center mt-1">
          <div className="text-sm text-gray-500 font-medium hover:text-gray-400 transition">
            <Skeleton className="h-3 w-[150px] bg-gray-500/30" />
          </div>
          <span className="text-[11px] text-gray-400">
            <Skeleton className="h-3 w-[50px] bg-gray-500/30" />
          </span>
        </div>
        <div className="flex gap-y-2 gap-x-2 items-center flex-wrap mt-1">
          {tags.map((tag) => (
            <div key={tag.name} className="flex items-center justify-center rounded-full">
              <Skeleton className="h-3 w-[30px] bg-gray-500/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PantipContentItemSkeleton;