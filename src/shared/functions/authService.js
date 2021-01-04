import axios from "axios";
import tokenStorage from "./tokenService";

axios.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Basic ${tokenStorage.getToken}`;
  return config;
});
