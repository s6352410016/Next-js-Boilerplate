import { axiosInstance } from "@/libs/axiosInstance";

export const getHightlights = async () => {
  try {
    const { data } = await axiosInstance.get('/api/forum-service/home/get_highlight');

    return data.data;
  } catch (error) {
    console.log(error);
  }
} 