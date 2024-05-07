import { Topics } from "types";
import PantipContentItemSkeleton from "./PantipContentItemSkeleton";

interface PantipContentSkeletonProps {
  topics: Topics[];
}

const PantipContentSkeleton: React.FC<PantipContentSkeletonProps> = ({ topics }) => {
  return (
    <>
      <div className="flex flex-col">
        {topics.map((topic) => (
          <PantipContentItemSkeleton
            key={topic.topic_id}
            tags={topic.tags}
          />
        ))}
      </div>
    </>
  );
}

export default PantipContentSkeleton;