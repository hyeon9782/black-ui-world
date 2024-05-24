import { Comment, NewComment } from "../types/comments";
import { instance } from "./instance";

const getComments = (slug: string): Promise<Comment[]> => {
  return instance.get(`/articles/${slug}/comments`);
};

const createComment = (slug: string, newComment: NewComment) => {
  return instance.post(`/articles/${slug}`, newComment);
};

const deleteComment = (slug: string, id: number) => {
  return instance.get(`/articles/${slug}/comments/${id}`);
};

export { getComments, createComment, deleteComment };
