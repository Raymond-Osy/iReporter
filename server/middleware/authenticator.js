import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default {
  generateToken(user) {
    const token = jwt.sign({ user }, process.env.JWTKEY, { expiresIn: '24h' });
    return token;
  },

  checkToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      res.status(403)
        .json({
          success: false,
          message: 'Missing Token'
        });
    } else {
      jwt.verify(token, process.env.JWTKEY, (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Invalid token supplied' });
        }
        req.user = decoded.user;

        next();
      });
    }
  }
};
