import axios from "axios";
import { getToken } from "../auth";
export const BASE_URL = "http://blogapplicationbyhs-env.eba-mth3vthu.eu-north-1.elasticbeanstalk.com/api/v1";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

// const config = {
//   headers: {}
// };

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
      // console.log(config);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// privateAxios.interceptors.request.use(
//   (config) => {
//     const token = getToken();
  
//     if (token) {
//       config.headers.common.Authorization = `Bearer ${token}`;
//       // console.log(config);
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );
