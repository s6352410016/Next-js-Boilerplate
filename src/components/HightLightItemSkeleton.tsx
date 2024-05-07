import { Skeleton } from "@/components/ui/skeleton";

const HightLightItemSkeleton = () => {
  return (
    <div className="rounded-lg overflow-hidden flex flex-col">
      <div className="w-full min-h-52 h-full">
        <Skeleton className="h-[200px] w-full bg-gray-500/30" />
      </div>
      <Skeleton className="h-4 w-2/4 bg-gray-500/30" />
    </div>
  );
}

export default HightLightItemSkeleton;