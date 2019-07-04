import axios from "axios";

import keys from "./.config.js";

const request = axios.create({
  baseURL: "https://joshs-coding-world.herokuapp.com/api/"
});

export const getArticles = ({ topic, sort, order, page }) => {
  return request
    .get(`/articles`, { params: { topic, sort_by: sort, order, p: page } })
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

export const postComment = ({ article_id, username, body }) => {
  return request
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => {
      return data.comment;
    })
    .catch(error => console.dir(error));
};

export const deleteComment = ({ value }) => {
  return request
    .delete(`/comments/${value}`)
    .then(({ data }) => {})
    .catch(err => console.dir(err));
};

export const getArticlesByUser = ({ username }) => {
  return request
    .get(`/articles`, { params: { author: username } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const postUser = ({ name, username, response }) => {
  return request
    .post(`/users`, { name, username, avatar_url: response })
    .then(({ data }) => {
      return data.user;
    });
};

export const randomImage = () => {
  const id = keys.applicationId;

  return axios
    .get(`https://api.unsplash.com/photos/random/?client_id=${id}`)
    .then(({ data }) => {
      return data.urls.small;
    });
};

export const postArticle = ({ username, title, body, topic }) => {
  return request
    .post(`/articles`, { author: username, title, body, topic })
    .then(({ data }) => {
      return data.article;
    })
    .catch(error => console.dir(error));
};

export const deleteArticle = ({ value }) => {
  return request
    .delete(`/articles/${value}`)
    .then(({ data }) => {})
    .catch(err => console.dir(err));
};

export const postTopic = ({ title, description }) => {
  return request
    .post(`/topics`, { slug: title, description })
    .then(({ data }) => {
      return data.topic;
    })
    .catch(error => console.dir(error));
};
