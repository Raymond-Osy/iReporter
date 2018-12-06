import express from 'express';
import redFlags from '../dummydb/dummydb';

const app = express();
app.use(express.json());

/**
  * @class redFlagsController
  * @description CRUD operations on redFlags
  */
class RedFlagsController {
/**
  * @static
  * @param {object} req - The request payload recieved from the router.........Done
  * @param {object} res - The response payload sent back from the controller
  * @returns {object} - status Message and list of all redFlags
  * @memberOf redFlagsController
  */
  static getAllRedFlags(req, res) {
    if (redFlags.length === 0) {
      return res.status(404).json({ message: 'No Red-Flag available at this time' });
    }
    return res.json({ message: 'Red-Flags list loaded successfully', redFlags });
  }

  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - status Message and the particular redFlag by id.
    * @memberOf redFlagsController
    */
  static getARedFlagById(req, res) {
    const { id } = req.params;
    const redFlag = redFlags.find(event => event.id === parseInt(req.params.id));
    if (!redFlag) {
      return res.status(404).json({
        error: 404,
        message: `Red-flag with the given Id ${id} does not exist`
      });
    }
    return res.status(200).json({
      message: 'Red-flags search was successful',
      status: 200,
      data: redFlag,
    });
  }

  /**
   * @static
   * @param {object} req - The request payload sent to the router
   * @param {object} res - The response payload sent back from the controller
   * @returns {object} - status Message and the particular redFlag created.
   * @memberOf redFlagsController
   */
  static createRedFlag(req, res) {
    const redFlag = {
      id: redFlags.length === 0 ? 1 : redFlags.length + 1,
      createdOn: new Date().toString(),
      createdBy: redFlags.length + 1,
      type: req.body.type,
      location: req.body.location,
      status: 'resolved',
      comment: req.body.comment
    };

    redFlags.push(redFlag);
    return res.status(201).send({
      message: 'Red-flag created  record succesfully',
      status: 201,
      data: redFlag,
    });
  }

  /**
   * @static
   * @param {object} req - The request payload sent to the router
   * @param {object} res - The response payload sent back from the controller
   * @returns {object} - status Message and the particular redFlag deleted.
   * @memberOf redFlagsController
   */
  static deleteRedFlag(req, res) {
    const { id } = req.params;
    const redFlag = redFlags.find(event => event.id === parseInt(req.params.id));
    if (!redFlag) {
      return res.status(404).json({
        status: 404,
        error: `Red-flag with the given Id ${id} was not found`
      });
    }
    const index = redFlags.indexOf(redFlag);
    redFlags.splice(index, 1);

    return res.status(200).json({
      message: `Red-flags deletion with the ID ${id} was successful`,
      status: 200,
      data: redFlag,
    });
  }

  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - status Message and the particular updated entry created.
    * @memberOf redFlagsController
    */
  static updateRedFlagLocation(req, res) {
    const redFlag = redFlags.find(event => event.id === parseInt(req.params.id));
    if (!redFlag) {
      return res.status(404).json({ status: 404, message: 'Red-flag with the given location was not found' });
    }
    const redFlagId = redFlags.id;
    redFlag.location = req.body.location;
    res.status(200).send({
      status: 200,
      data: [{
        id: redFlagId,
        message: ' Red-Flag Location updated successfully',
        redFlag,
      }]
    });
  }

  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - status Message and the particular updated entry created.
    * @memberOf BusinessController
    */
  static updateRedFlagComment(req, res) {
    const redFlag = redFlags.find(event => event.id === parseInt(req.params.id));
    if (!redFlag) {
      return res.status(404).json({ status: 404, error: 'Red-flag with the given comment was not found' });
    }
    const redFlagId = redFlags.id;
    redFlag.comment = req.body.comment;
    res.status(200).send({
      status: 200,
      data: [{
        id: redFlagId,
        message: ' Red-Flag comment updated successfully',
        redFlag,
      }]
    });
  }
}
export default RedFlagsController;
