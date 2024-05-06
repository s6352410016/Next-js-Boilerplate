export interface HightlightData {
  name: string;
  image_url: string[];
  post_url: string;
}

interface Author {
  name: string;
  slug: string;
}

export interface Tags {
  name: string;
}

export interface Topics {
  topic_id: number;
  title: string;
  thumbnail_url: string;
  author: Author;
  created_time: Date;
  tags: Tags[];
}

export interface SuggestTopicsData {
  room_id: number;
  room_name_th: string;
  tag_id?: number;
  tag_name?: string;
  topics: Topics[];
}