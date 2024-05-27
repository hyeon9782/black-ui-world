import { Profile } from "./profile";

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
};

export type NewArticle = Pick<
  Article,
  "title" | "description" | "body" | "tagList"
>;

export type UpdateArticle = Pick<Article, "title" | "description" | "body">;
