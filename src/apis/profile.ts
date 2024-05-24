import { Profile } from "../types/profile";
import { instance } from "./instance";

const getProfile = (username: string): Promise<Profile> => {
  return instance.get(`/profiles/${username}`);
};

const follow = (username: string) => {
  return instance.post(`/profiles/${username}/follow`);
};

const unFollow = (username: string) => {
  return instance.delete(`/profiles/${username}/follow`);
};

export { getProfile, follow, unFollow };
