import axios from "axios";
import { getToken } from "../auth";

//export const BASE_URL = "http://localhost:9090/api/v1";

export const BASE_URL ="http://blogapplicationbyhs-env.eba-mth3vthu.eu-north-1.elasticbeanstalk.com/api/v1";

//export const BASE_URL = "https://hs-blog-app.up.railway.app/api/v1";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
