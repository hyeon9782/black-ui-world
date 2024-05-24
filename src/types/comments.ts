import { Profile } from "./profile";

export type Comment = {
  id: number;
  createAt: string;
  updateAt: string;
  body: string;
  author: Profile;
};

export type NewComment = Pick<Comment, "body">;
