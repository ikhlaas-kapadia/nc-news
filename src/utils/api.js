import Axios from "axios";

const request = Axios.create({
  baseURL: "https://news-app-ikhlaas.herokuapp.com/api",
});
export const getTopics = async () => {
  const topics = await request.get("/topics");
  return topics.data;
};
