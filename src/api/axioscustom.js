import axios from "axios";

const Axioscustom = axios.create({
  baseURL: "https://reqres.in/",
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
Axioscustom.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Request Headers:", config.headers);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axioscustom.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default Axioscustom;
