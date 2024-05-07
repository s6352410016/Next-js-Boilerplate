"use client";

import {
  Orbit,
  Brush,
  BotMessageSquare,
  Aperture,
  Feather,
  WalletCards,
  HandHeart,
  FlaskRound,
  SmilePlus,
  HandCoins,
  Coins,
  type LucideProps
} from "lucide-react";
import Box from "./Box";
import PantipContent from "./PantipContent";
import type { SuggestTopicsData } from "types";
import { useEffect, useState, type ForwardRefExoticComponent, type RefAttributes } from "react";
import BoxSkeleton from "./BoxSkeleton";
import PantipContentSkeleton from "./PantipContentSkeleton";

interface MainContentProps {
  data: SuggestTopicsData[];
}

const iconMap = [
  Orbit,
  Brush,
  BotMessageSquare,
  Aperture,
  Feather,
  WalletCards,
  HandHeart,
  FlaskRound,
  SmilePlus,
  HandCoins,
  Coins
];

const MainContent: React.FC<MainContentProps> = ({ data }) => {
  const [suggestTopics, setSuggestTopics] = useState<SuggestTopicsData[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSuggestTopics(data);
    }, 2000);
  }, []);

  return (
    <div className="my-4 px-4 lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4">
      {suggestTopics.length === 0
        ?
        data.map((suggestTopic, index) => (
          <BoxSkeleton key={index}>
            <PantipContentSkeleton topics={suggestTopic.topics}/>
          </BoxSkeleton>
        ))
        :
        data.map((suggestTopic, index) => {
          if (index < iconMap.length) {
            return (
              <Box
                key={suggestTopic.room_id ?? suggestTopic.tag_id}
                label={suggestTopic.room_name_th ?? suggestTopic.tag_name}
                icon={iconMap[index] as ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>}
              >
                <PantipContent topics={suggestTopic.topics} />
              </Box>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
}

export default MainContent;