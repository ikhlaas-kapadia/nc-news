import Axios from "axios";

const request = Axios.create({
  baseURL: "https://news-app-ikhlaas.herokuapp.com/api",
});
export const getTopics = async () => {
  const topics = await request.get("/topics");
  return topics.data;
};

export const getArticles = async (query) => {
  const articles = await request.get("/articles", { params: query });
  return articles.data;
};

export const getArticleById = async (id) => {
  const article = await request.get(`/articles/${id}`);
  return article.data;
};

export const getComments = async (id) => {
  const comments = await request.get(`/articles/${id}/comments`);
  return comments.data;
};

export const updateVote = async (id, vote, type) => {
  const votes = await request.patch(`/${type}/${id}`, { inc_votes: vote });
  return votes.data;
};
