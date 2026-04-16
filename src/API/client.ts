import axios from "axios";

// axios instance (central API config)
export const api = axios.create({
  baseURL: "https://deedee-unchainable-optionally.ngrok-free.dev",
});

// attach token in every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});