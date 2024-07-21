const axios = require("axios").default;

const AuthenticateUser = (data) =>
  axios.post("api/v1/user/login", {
    email: data.email,
    pass: data.pass,
  });

const getUserDetails = (token) => axios.post("/api/v1/user/details", { token });

const fetchUserTransactions = () => axios.get("/api/v1/user/transactions");

export default { AuthenticateUser, getUserDetails, fetchUserTransactions };
