const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  // Check if the token exists and starts with "Bearer"
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(400).json({ msg: "No token provided" });
  }

  // Extract token from Bearer
  const jwttoken = token.split(" ")[1]; 

  try {
    // Verify JWT token
    const isVerified = jwt.verify(jwttoken, process.env.JWT_SECRET);

    // Find user based on email in the JWT payload
    const user = await User.findOne({ email: isVerified.email }).select("-password");
    if (!user) {
      return res.status(401).json({ msg: "User not found for this token" });
    }

    // Attach user info to request
    req.user = user;
    req.token = token;
    req.userId = user._id;

    next(); // Proceed to next middleware or route handler
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" }); // Use 401 for invalid token
  }
};

module.exports = authMiddleware;
