import { Skeleton } from "@/components/ui/skeleton";

interface BoxSkeletonProps {
  children: React.ReactNode;
}

const BoxSkeleton: React.FC<BoxSkeletonProps> = ({
  children
}) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="px-2 py-2 bg-gray-100 text-2xl text-pink-600 font-bold flex items-center justify-between">
        <div className="flex gap-x-2">
          <div className="p-2">
            <Skeleton className="h-10 w-10 rounded-full bg-gray-500/30" />
          </div>
          <div className="flex items-center">
            <Skeleton className="h-4 w-[250px] bg-gray-500/30" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default BoxSkeleton;