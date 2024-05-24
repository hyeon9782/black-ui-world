import { instance } from "./instance";

const getTags = (): Promise<string[]> => {
  return instance.get(`/tags`);
};

export { getTags };
