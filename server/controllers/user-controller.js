import User from "../models/User.js";

//hashes passwords
import bcrypt from "bcryptjs";

//safe way for us to store users in browser for a period of time
import jwt from "jsonwebtoken";

// LOGIN
export const login = async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Incorrect password." });

    const token = jwt.sign(
      //Include email and id along with accessToken
      { username: existingUser.username, id: existingUser._id },
      process.env.JWT_SECRET,
      // number value indicates seconds (eg, "expiresIn: 60" indicates expiration in 60 seconds)
      // string value allows for more specificity ("15m", "1h", "1d" )
      { expiresIn: "15m" }
    );

    //Respond with everything but user password
    const { password, ...loggedInUser } = existingUser._doc;
    res.status(200).json({ user: loggedInUser, token });
  } catch (error) {
    res.status(500).json({ message: "Failed to sign in." });
  }
};

// REGISTER
export const register = async (req, res) => {
  let existingUser;
  try {
    existingUser = await User.findOne({ username: req.body.username });

    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    //Second arg in hash method is 'salt' (password difficulty)
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin,
    });

    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    //Respond with everything but user password
    const { password, ...registeredUser } = user._doc;
    //If user creation was successful, send result and token back in res obj with status code.
    res.status(201).json({ user: registeredUser, token });
  } catch (error) {
    res.status(500).json({ message: "Failed to register user." });
  }
};

// UPDATE
// export const updateUser = async (req, res) => {
//   //Check for missing fields to ensure user doesn't update w/ blank values.
//   if (!req.body.username || !req.body.email)
//     return res.status(400).json({ message: "Missing inputs" });

//   let existingUser;
//   try {
//     existingUser = await User.findOne({ _id: req.params.id });
//     if (!existingUser)
//       return res.status(404).json({ message: "User doesn't exist." });

//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.currentPassword,
//       existingUser.password
//     );

//     if (!isPasswordCorrect)
//       return res.status(400).json({ message: "Incorrect password." });

//     if (req.body.password) {
//       req.body.password = await bcrypt.hash(req.body.password, 12);
//     }
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to update user." });
//   }
// };

// UPDATE FAVORITES
export const updateFavorites = async (req, res) => {
  let existingUser;
  try {
    if (req.userId !== req.params.id)
      return res
        .status(409)
        .json({ message: "Token user id and params.id missmatch" });

    existingUser = await User.findOne({ _id: req.params.id });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        favorites: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Failed to update user." });
  }
};

// //DELETE
// export const deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json("User deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
