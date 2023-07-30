import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const authMiddleware = (req, res, next) => {
  // Check if the user has a valid session cookie
  const sessionCookie = req.cookies.session;

  if (sessionCookie) {
    // TODO: Verify the session cookie against your authentication mechanism
    // For example, you can decode and validate the session cookie against a session store or database

    // If the session is valid, you can proceed to the next middleware or route
    next();
  } else {
    // If the session is not valid, redirect the user to the login page or return an error response
    res.redirect('/login');
  }
};
