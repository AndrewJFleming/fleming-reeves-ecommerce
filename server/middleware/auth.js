import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedData.id;
    }
    console.log(req);
    next();
  } catch (err) {
    console.log(err);
  }
};

// export const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.token;
//   if (!authHeader) {
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//       if (err) res.status(403).json("Token is not valid");
//       req.user = user;
//       next();
//     });
//   } else {
//     return res.status(401).json("You are not authenticated");
//   }
// };
