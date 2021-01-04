import { handleError, handleResponse } from "./apiUtils";
import { API_URL } from "../constants/constants";

import axios from "axios";

export function loginApi(data) {
  return axios
    .post(
      `${API_URL.AUTH}`,
      { access_token: data.access_token },
      {
        auth: {
          username: data.email,
          password: data.password,
        },
      }
    )
    .then(handleResponse)
    .catch(handleError);
}
