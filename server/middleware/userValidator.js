/* eslint-disable require-jsdoc */
/**
 * @class RedFlag
 * @description Validates the POST and PATCH requests for Red-Flag report
 */
class UserValidator {
  /**
     * Validate sign up details
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {object} next - The next middleware
     * @return {object} status and message
     * @memberof UserValidator
     */
  static signupValidator(req, res, next) {
    const {
      firstname, lastname, email, phoneNumber, username, password
    } = req.body;

    if (!firstname) {
      return res.status(400).send({
        status: 400,
        error: 'firstname must be present'
      });
    }
    if (!lastname) {
      return res.status(400).send({
        status: 400,
        error: 'Last Name must be present'
      });
    }
    if (!email) {
      return res.status(400).send({
        status: 400,
        error: 'Email must be present'
      });
    }
    if (!phoneNumber) {
      return res.status(400).send({
        status: 400,
        error: 'Phone Number must be present'
      });
    }
    if (!username) {
      return res.status(400).send({
        status: 400,
        error: 'username must be present'
      });
    }
    if (!password) {
      return res.status(400).send({
        status: 400,
        error: 'password must be present'
      });
    }
    next();
  }

  /**
     * Validate login details
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {object} next - The next middleware
     * @return {object} status and message
     * @memberof UserValidator
     */
  static loginValidator(req, res, next) {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).send({
        status: 400,
        error: 'Email must be present'
      });
    }
    if (!password) {
      return res.status(400).send({
        status: 400,
        error: 'password must be present'
      });
    }
    next();
  }
}

export default UserValidator;
