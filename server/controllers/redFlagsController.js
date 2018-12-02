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

  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - status Message and the particular updated entry created.
    * @memberOf BusinessController
    */
  static updateRedFlag(req, res) {
    const id = req.params.redFlagId;
    const redFlag = redFlags.find(redFlagItem => +redFlagItem.redFlagId === +id);
    Object.assign(redFlag, req.body);
    return res.json({ message: 'Red-Flag updated successfully', redFlag });
  }

  /**
   * @static
   * @param {object} req - The request payload sent to the router
   * @param {object} res - The response payload sent back from the controller
   * @returns {object} - status Message and the particular redFlag deleted.
   * @memberOf redFlagsController
   */
  static deleteRedFlag(req, res) {
    const id = req.params.redFlagId;
    const redFlag = redFlags.find(redFlagItem => +redFlagItem.redFlagId === +id);
    if (!redFlag) {
      return res.status(404).json({ message: `Red-flag with the given Id ${id} does not exist` });
    }
    const index = redFlags.indexOf(redFlag);
    redFlags.splice(index, 1);

    return res.status(200).json({ message: 'Red-flags deletion was successful', redFlag });
  }

  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - status Message and the particular updated entry created.
    * @memberOf redFlagsController
    */
  static updateRedFlagLocation(req, res) {
    // eslint-disable-next-line radix
    const redFlag = redFlags.find(r => r.redFlagId === parseInt(req.params.redFlagId));
    if (!redFlag) {
      return res.status(404).json({ message: 'Red-flag with the given location does not exist' });
    }
    const redFlagId = redFlags.redFlagid;
    redFlag.location = req.body.location;
    res.status(200).send({ data: [{ id: redFlagId, message: ' Red-Flag Location updated successfully', redFlag }] });
  }

  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - status Message and the particular updated entry created.
    * @memberOf BusinessController
    */
  static updateRedFlagComment(req, res) {
    // eslint-disable-next-line radix
    const redFlag = redFlags.find(r => r.redFlagId === parseInt(req.params.redFlagId));
    if (!redFlag) {
      return res.status(404).json({ message: 'Red-flag with the given comment was not found' });
    }
    const redFlagId = redFlags.redFlagid;
    redFlag.comment = req.body.comment;
    res.status(200).send({ data: [{ id: redFlagId, message: ' Red-Flag comment updated successfully', redFlag }] });
  }
}
export default RedFlagsController;
