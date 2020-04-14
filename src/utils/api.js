import Axios from "axios";

const request = Axios.create({
  baseURL: "https://news-app-ikhlaas.herokuapp.com/api",
});
export const getTopics = async () => {
  const topics = await request.get("/topics");
  return topics.data;
};

export const getArticles = async (query) => {
  //   console.log(query);
  const articles = await request.get("/articles", { params: query });
  return articles.data;
};

export const getArticleById = async (id) => {
  //   console.log(query);
  const article = await request.get(`/articles/${id}`);
  return article.data;
};
