/* eslint-disable require-jsdoc */
import queries from '../db/queries';
import db from '../db/index';

/**
  * @class usersController
  * @description CRUD operations on users
  */
class InterventionsController {
  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - The particular redFlag by id.
    * @memberOf interventionController
    */
  static createIntervention(req, res) {
    const { location, comment } = req.body;
    const { id } = req.user;
    db.query(queries.createIncident,
      [id, 'intervention', location, 'draft', comment],
      (err, dbRes) => {
        if (err) {
          return res.status(400).json({ status: 400, error: err });
        }
        const { rows } = dbRes;
        const intervention = rows[0];
        return res.status(201).json({ status: 201, data: [{ intervention }] });
      });
  }

  static getAllInterventions(req, res) {
    db.query(queries.getAllInterventions,
      ['intervention'],
      (err, dbRes) => {
        if (err) {
          return res.status(400).json({ status: 400, error: err });
        }
        const { rows } = dbRes;
        return res.status(200).json({ status: 200, data: rows[0] });
      });
  }

  static getInterventionById(req, res) {
    db.query(queries.getInterventionById,
      ['intervention', req.params.id],
      (err, dbRes) => {
        if (err) {
          return res.status(400).json({ status: 400, error: err });
        }
        const { rows, rowCount } = dbRes;
        console.log(rows[0], 'efedgrgergfgref');
        if (rowCount === 0) {
          return res.status(404).json({ status: 404, error: 'Intervention not found' });
        }
        return res.status(200).json({ status: 200, data: rows[0] });
      });
  }
}
export default InterventionsController;
