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

export const getArticleById = article_id => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsForArticle = article_id => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    console.log(data);
    return data.comments;
  });
};
