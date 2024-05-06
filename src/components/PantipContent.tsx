import PantipContentItem from "./PantipContentItem";
import { Topics } from "types";

interface PantipContentProps {
  topics: Topics[];
}

const PantipContent: React.FC<PantipContentProps> = ({ topics }) => {
  return (
    <>
      <div className="flex flex-col">
        {topics.map((topic) => (
          <PantipContentItem
            key={topic.topic_id}
            imgSrc={topic.thumbnail_url}
            title={topic.title}
            hrefContent={topic.topic_id}
            hrefMember={topic.author.slug}
            memberName={topic.author.name}
            tags={topic.tags}
            createdAt={topic.created_time}
          />
        ))}
      </div>
    </>
  );
}

export default PantipContent;