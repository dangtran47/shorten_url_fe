import { ajax } from "rxjs/ajax";
import { map } from "rxjs";
import get from "lodash/get";

import { BASE_URL } from "../constants";

const signInSelector = (response) => {
  return {
    token: get(response, "data"),
    message: "Sign in succesful.",
  };
};

const signIn = ({ email, password }) => {
  return ajax({
    url: `${BASE_URL}/api/v1/users/sign_in`,
    method: "POST",
    body: { email, password },
    crossDomain: true,
  }).pipe(map((response) => signInSelector(response.response)));
};

export default {
  signIn,
};
