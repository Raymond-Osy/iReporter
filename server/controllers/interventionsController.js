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
        return res.status(200).json({ status: 200, data: rows });
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

  static updateLocation(req, res) {
    const { location } = req.body;
    const { id } = req.user;
    db.query(queries.updateLocation,
      [location, req.params.id, id],
      (err, dbRes) => {
        if (err) {
          return res.status(400).json({ status: 400, error: err });
        }
        if (dbRes.rowCount === 1) {
          return res.status(200).json({
            status: 200,
            data: [{ id: req.params.id, message: 'updated intervention location' }]
          });
        }
        return res.status(404).json({ status: 404, data: [{ id: req.params.id, message: 'could not update location' }] });
      });
  }

  static updateComment(req, res) {
    const { comment } = req.body;
    const { id } = req.user;
    db.query(queries.updateComment,
      [comment, req.params.id, id],
      (err, dbRes) => {
        if (err) {
          return res.status(400).json({ status: 400, error: err });
        }
        if (dbRes.rowCount === 1) {
          return res.status(200).json({
            status: 200,
            data: [{ id: req.params.id, message: 'updated intervention comment' }]
          });
        }
        return res.status(404).json({ status: 404, data: [{ id: req.params.id, message: 'could not update comment' }] });
      });
  }

  // Route for an Admin to change status
  static updateStatus(req, res) {
    const { status } = req.body;
    db.query(queries.updateStatus,
      [status, req.params.id],
      (err, dbRes) => {
        if (err) {
          return res.status(400).json({ status: 400, error: err });
        }
        if (dbRes.rowCount === 1) {
          return res.status(200).json({
            status: 200,
            data: [{ id: req.params.id, message: 'updated intervention status' }]
          });
        }
        return res.status(404).json({ status: 404, data: [{ id: req.params.id, message: 'could not update' }] });
      });
  }

  static delete(req, res) {
    db.query(queries.deleteIncident,
      [req.params.id],
      (err, dbRes) => {
        if (err) {
          return res.status(404).json({ status: 404, data: [{ id: req.params.id, message: 'could not delete' }] });
        }
        if (dbRes.rowCount === 1) {
          return res.status(200).json({
            status: 200,
            data: [{ id: req.params.id, message: 'deleted intervention' }]
          });
        }
        return res.status(404).json({ status: 404, data: [{ id: req.params.id, message: 'could not delete' }] });
      });
  }
}
export default InterventionsController;
