import { handleError, handleResponse } from "./apiUtils";
import { BASE_URL, API_URL } from "../constants/constants";

import axios from "axios";

export function login(data) {
  return axios
    .post(`${API_URL.USERS}`, data)
    .then(handleResponse)
    .catch(handleError);
}
