import axios from "axios";

const axiosApiInstance = axios.create({
  baseURL: "http://localhost:3000",
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
