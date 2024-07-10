import jwt from "jsonwebtoken";

export default async function isAuthenticated(token) {
  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    return true;
  } catch (error) {
    return false;
  }
}
