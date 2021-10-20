import { ajax } from "rxjs/ajax";
import { map } from "rxjs";
import get from "lodash/get";

import { BASE_URL } from "../constants";

const registerUserSelector = (response) => {
  return {
    message: get(response, "data.message"),
  };
};

const registerUser = ({ email, password }) => {
  return ajax({
    url: `${BASE_URL}/api/v1/users/registration`,
    method: "POST",
    body: { email, password },
    crossDomain: true,
  }).pipe(map((response) => registerUserSelector(response.response)));
};

export default {
  registerUser,
};
