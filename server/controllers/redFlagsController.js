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
  * @param {object} req - The request payload recieved from the router
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
    const id = req.params.redFlagId;
    const redFlag = redFlags.find(redFlagItem => +redFlagItem.redFlagId === +id);
    if (!redFlag) {
      return res.status(404).json({ message: `Red-flag with the given Id ${id} does not exist` });
    }
    return res.json({ message: 'Red-flags search was successful', redFlag });
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
      redFlagId: redFlags.length === 0 ? 1 : redFlags.length + 1,
      redFlagTitle: req.body.redFlagTitle,
      date: new Date(),
      type: req.body.type,
      userId: redFlags.length + 1,
      location: req.body.location,
      img: req.body.img,
      comment: req.body.comment
    };

    redFlags.push(redFlag);
    return res.status(201).send({ message: 'New redFlag successfully added', redFlag });
  }
}

export default RedFlagsController;
