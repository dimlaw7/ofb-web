const axios = require("axios").default;

const AuthenticateUser = (data) =>
  axios.post("api/v1/user/login", {
    email: data.email,
    pass: data.pass,
  });

const getUserDetails = (token) => axios.post("api/v1/user/details", { token });

export default { AuthenticateUser, getUserDetails };
