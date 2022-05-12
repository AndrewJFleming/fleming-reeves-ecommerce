import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    //Get token part of the string from request.
    const token = req.headers.authorization.split(" ")[1];
    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedData.id;
    }
    next();
  } catch (error) {
    res.status(401).json({
      message:
        error.name === "TokenExpiredError"
          ? "Login token expired"
          : "Token validation failed",
    });
  }
};
