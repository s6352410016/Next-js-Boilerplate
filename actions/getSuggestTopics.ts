import { axiosInstance } from "@/libs/axiosInstance";

export const getSuggestTopics = async () => {
  try{
    const { data } = await axiosInstance.get("/api/forum-service/home/get_suggest_topic_behavior?tracking_code=s2m9gu2gs0z4k5BUv0Jgp");

    return data.data;
  }catch(error){
    console.log(error);
  }
}