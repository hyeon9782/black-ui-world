export type User = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
};

export type UpdateUser = {
  email: string;
  password: string;
  username: string;
  bio: string;
  image: string;
};

export type LoginUser = Pick<UpdateUser, "email" | "password">;

export type NewUser = Omit<UpdateUser, "bio" | "image">;
