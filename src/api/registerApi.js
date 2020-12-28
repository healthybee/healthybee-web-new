import { handleError, handleResponse } from "./apiUtils";
import { API_URL } from "../constants/constants";

import axios from "axios";

export function registerApi(data) {
  return axios
    .post(`${API_URL.USERS}`, data)
    .then(handleResponse)
    .catch(handleError);
}
