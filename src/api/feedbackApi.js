import { handleError, handleResponse } from "./apiUtils";
import { API_URL } from "../constants/constants";

import axios from "axios";

export function feedbackApi(data) {
  return axios
    .post(`${API_URL.FEEDBACK}`, {
      access_token: data.access_token,
      email: data.email,
      number: data.number,
      message: data.message,
    })
    .then(handleResponse)
    .catch(handleError);
}
