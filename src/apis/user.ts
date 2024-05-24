import { LoginUser, NewUser, UpdateUser } from "../types/user";
import { instance } from "./instance";

const login = (loginUser: LoginUser) => {
  return instance.post(`/users/login`, loginUser);
};

const createUser = (newUser: NewUser) => {
  return instance.post(`/users`, newUser);
};

const getUser = () => {
  return instance.get("/user");
};

const updateUser = (updateUser: UpdateUser) => {
  return instance.put("user", updateUser);
};

export { login, createUser, getUser, updateUser };
