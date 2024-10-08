// // middleware/auth.js


// const authenticate = (req, res, next) => {
//   const token = req.headers['authorization'].split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'No token provided.' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(403).json({ message: 'Failed to authenticate token.' });

//     req.user = decoded; // attach user information to request
//     next();
//   });
// };

// export default authenticate


// middleware/auth.js
import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

export default authenticate;

