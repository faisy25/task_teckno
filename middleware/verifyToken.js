import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  //   const token = req.header("x-auth-token");
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      //   console.error("Token verification error:", err);
      return res.sendStatus(403);
    }
    req.username = decoded.username;
    next();
  });
};
