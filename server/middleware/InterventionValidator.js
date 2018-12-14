/* eslint-disable require-jsdoc */
/**
 * @class RedFlag
 * @description Validates the POST and PATCH requests for Red-Flag report
 */
class InterventionValidator {
  static createInterventionValidator(req, res, next) {
    const { comment, location } = req.body;
    if (!comment) {
      return res.status(400).send({
        status: 400,
        error: 'comments must be present'
      });
    }
    if (!location) {
      return res.status(400).send({
        status: 400,
        error: 'Location must be present'
      });
    }
    next();
  }

  static updateLocationValidator(req, res, next) {
    const { location } = req.body;
    if (!location) {
      return res.status(400).send({
        status: 400,
        error: 'Location must be present'
      });
    }
    next();
  }

  static updateCommentValidator(req, res, next) {
    const { comment } = req.body;
    if (!comment) {
      return res.status(400).send({
        status: 400,
        error: 'comment must be present'
      });
    }
    next();
  }

  static updateStatusValidator(req, res, next) {
    const { status } = req.body;
    if (!status) {
      return res.status(400).send({
        status: 400,
        error: 'Status must be present'
      });
    }
    next();
  }
}

export default InterventionValidator;
