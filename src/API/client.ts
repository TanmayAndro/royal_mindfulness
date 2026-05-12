import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user_token");

    if (token && config.headers) {
      config.headers.set("token", token.trim());
      config.headers.set("accept", "application/json");
      config.headers.set("ngrok-skip-browser-warning", "true");
    }

    return config;
  },
  (error) => Promise.reject(error)
);