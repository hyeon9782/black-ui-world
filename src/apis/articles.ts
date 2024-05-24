import { NewArticle, UpdateArticle } from "../types/articles";
import { instance } from "./instance";

const getArticles = () => {
  return instance.get("/articles");
};

const getArticlesWithFeed = () => {
  return instance.get("/articles/feed");
};

const createArticle = (newArticle: NewArticle) => {
  return instance.post("/articles", newArticle);
};

const getArticle = (slug: string) => {
  return instance.get(`/articles/${slug}`);
};

const updateArticle = (slug: string, updateArticle: UpdateArticle) => {
  return instance.put(`/articles/${slug}`, updateArticle);
};

const deleteArticle = (slug: string) => {
  return instance.delete(`/articles/${slug}`);
};

export {
  getArticles,
  getArticlesWithFeed,
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
};
