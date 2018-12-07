/* eslint-disable require-jsdoc */

class IncidentValidator {
  static creatRedflagValidator(req, res, next) {
    const { comment, location } = req.body;
    if (!comment || comment.trim() === '') {
      return res.status(400).send({
        status: 404,
        error: 'comments not found in the request body',
      });
    }
    if (typeof (comment) !== 'string') {
      return res.status(400).send({
        status: 400,
        error: 'comments must be a string',
      });
    }
    if (!location || comment.trim() === '') {
      return res.status(400).send({
        status: 400,
        error: 'location not found in the request body',
      });
    }
    if (typeof (location) !== 'string') {
      return res.status(400).send({
        status: 400,
        error: 'location must contain a string',
      });
    }
    next();
  }

  static redFlagLocationValidator(req, res, next) {
    const { location } = req.body;

    if (!location || typeof (location) !== 'string') {
      return res.status(400).send({
        status: 400,
        error: 'location must be present and must be a string',
      });
    }
    next();
  }

  static redFlagCommentValidator(req, res, next) {
    const { comment } = req.body;

    if (!comment || typeof (comment) !== 'string') {
      return res.status(400).send({
        status: 400,
        error: 'comment must be present and must be a string',
      });
    }
    next();
  }
}

export default IncidentValidator;
