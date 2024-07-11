const axios = require("axios").default;

const AuthenticateUser = (data) =>
  axios.post("api/v1/user/login", {
    email: data.email,
    pass: data.pass,
  });

export default { AuthenticateUser };
