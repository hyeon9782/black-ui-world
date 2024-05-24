import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});

instance.interceptors.response.use();
