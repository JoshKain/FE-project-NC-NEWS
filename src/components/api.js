import axios from "axios";

const request = axios.create({
  baseURL: "https://joshs-coding-world.herokuapp.com/api/"
});

export const getArticles = topic => {
  return request.get("/articles", { params: { topic } }).then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
