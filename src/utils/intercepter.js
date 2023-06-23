import axios from "axios";
import { redirect } from "react-router-dom";
import { Base_URl } from "../app-environment";
import { publicIpv4 } from "public-ip";

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    config.baseURL = `${Base_URl}/api/v1`;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      config.headers["X-Forwarded-For"] = await publicIpv4();
    }
    config.headers["Content-Type"] = config.headers["Content-Type"] ? config.headers["Content-Type"] :"application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === `${Base_URl}/api/v1/users/token`) {
      redirect("/signin");
      return Promise.reject(error);
    }

    const refreshToken = localStorage.getItem("token");
    if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true;
      return axios
        .post("/users/token", {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem("token", res.data.token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);
