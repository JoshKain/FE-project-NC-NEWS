import axios from "axios";

const request = axios.create({
  baseURL: "https://joshs-coding-world.herokuapp.com/api/"
});

export const getArticles = ({ topic, sort, order }) => {
  return request
    .get(`/articles`, { params: { topic, sort_by: sort, order } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticleById = ({ article_id }) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsForArticle = article_id => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleVotes = ({ article_id, increment }) => {
  return request
    .patch(`/articles/${article_id}`, {
      inc_votes: increment
    })
    .then(({ data }) => {
      return data.article;
    });
};
export const patchCommentVotes = ({ comment_id, increment }) => {
  console.log(comment_id, increment);
  return request
    .patch(`/comments/${comment_id}`, {
      inc_Votes: increment
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const getUsers = () => {
  return request.get(`/users`).then(({ data }) => {
    return data.users;
  });
};
