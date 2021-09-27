import axios from "axios";

const axiosApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  responseType: "json",
});

axiosApiInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosApiInstance;
