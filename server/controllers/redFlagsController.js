import redFlags from '../dummydb/dummydb';

/**
  * @class redFlagsController
  * @description CRUD operations on redFlags
  */
class RedFlagsController {
/**
  * @static
  * @param {object} req - The request payload recieved from the router
  * @param {object} res - The response payload sent back from the controller
  * @returns {object} - status Message and list of all redFlags*
  * @memberOf redFlagsController
  */
  static getAllRedFlags(req, res) {
    if (redFlags.length === 0) {
      return res.status(404).json({ message: 'No Red-Flag available at this time' });
    }
    return res.json({ message: 'Red-Flags list loaded successfully', redFlags });
  }
}

export default RedFlagsController;
