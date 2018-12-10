/* eslint-disable require-jsdoc */
/**
 * @class RedFlag
 * @description Validates the POST and PATCH requests for Red-Flag report
 */
class RedFlagValidator {
  /**
   * Validate Red-flags details
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {object} next - The next middleware
   * @return {object} status and message
   * @memberof RedFlagValidator
   */
  static createRedflagValidator(req, res, next) {
    const { comment, location } = req.body;
    if (!location) {
      return res.status(400).send({
        status: 400,
        error: 'location must be present'
      });
    }
    if (!comment) {
      return res.status(400).send({
        status: 400,
        error: 'comments must be present'
      });
    }
    if (typeof (location) !== 'string') {
      return res.status(400).send({
        status: 400,
        error: 'location must contain a string'
      });
    }
    if (typeof (comment) !== 'string') {
      return res.status(400).send({
        status: 400,
        error: 'comments must contain a string'
      });
    }
    if (location.trim() === '') {
      return res.status(400).send({
        status: 400,
        error: 'Location must contain a valid string'
      });
    }
    if (comment.trim() === '') {
      return res.status(400).send({
        status: 400,
        error: 'comments must contain a valid string'
      });
    }
    next();
  }


  static redFlagLocationValidator(req, res, next) {
    const { location } = req.body;

    if (typeof (location) !== 'string') {
      return res.status(400).send({
        status: 400,
        error: 'location must be a string',
      });
    }
    if (!location || location.trim() === '') {
      return res.status(400).send({
        status: 400,
        error: 'location must be present',
      });
    }
    next();
  }


  static redFlagCommentValidator(req, res, next) {
    const { comment } = req.body;
    if (typeof (comment) !== 'string') {
      return res.status(400).send({
        status: 400,
        error: 'comment must be a string',
      });
    }
    if (!comment || comment.trim() === '') {
      return res.status(400).send({
        status: 400,
        error: 'comment must be present',
      });
    }
    next();
  }
}

export default RedFlagValidator;
