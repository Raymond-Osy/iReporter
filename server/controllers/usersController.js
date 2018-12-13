import Authenticator from '../middleware/authenticator';
import queries from '../db/queries';
import db from '../db/index';

/**
  * @class usersController
  * @description CRUD operations on users
  */
class UsersController {
  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - The particular redFlag by id.
    * @memberOf redFlagsController
    */
  static signup(req, res) {
    const {
      firstname, lastname, othernames, email, phoneNumber, username, password
    } = req.body;

    db.query(queries.insertIntoUsers,
      [firstname, lastname, othernames, email, phoneNumber, username, password],
      (err, dbRes) => {
        if (err) {
          const errors = {};
          if (err.code !== '23505') {
            errors.unknown = 'Cannot signup at the moment';
            return res.json({ message: 'Could not post data', err, errors });
          }
          errors.email = 'Email Address Already Exists on our database';
          return res.status(409).json({ success: false, message: 'Email Address Already Exists on our database', errors });
        }
        const user = dbRes.rows[0];
        const { id } = user;
        const token = Authenticator.generateToken({ email, id });
        return res.status(201).json({ status: 201, data: [{ token, user }] });
      });
  }

  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - The particular redFlag by id.
    * @memberOf redFlagsController
    */
  static login(req, res) {
    const { email, password } = req.body;

    db.query(queries.queryUsers, [email, password], (err, dbRes) => {
      const errors = {};
      if (err) {
        errors.unknown = 'Cannot signup at the moment';
        return res.json({ success: false, err, errors });
      }
      const { rows, rowCount } = dbRes;
      if (rowCount !== 1) {
        errors.email = 'Incorrect Email or password';
        return res.status(401).json({ success: false, errors });
      }
      const user = rows[0];
      const { userid } = rows[0];
      const token = Authenticator.generateToken({ email, userid });
      return res.status(200).json({ status: 200, data: [{ token, user }] });
    });
  }
}
export default UsersController;
