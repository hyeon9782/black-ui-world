import { instance } from "./instance";

const getTags = () => {
  return instance.get(`/tags`);
};

export { getTags };
