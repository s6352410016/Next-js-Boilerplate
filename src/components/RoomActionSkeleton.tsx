import { Skeleton } from "./ui/skeleton";

const RoomActionSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 mt-4 text-center">
      <div className="h-10 w-10 flex items-center justify-center rounded-full overflow-hidden">
        <Skeleton className="w-full h-full bg-gray-500/30"/>
      </div>
      <Skeleton className="w-10 h-2 bg-gray-500/30"/>
    </div>
  );
}

export default RoomActionSkeleton;