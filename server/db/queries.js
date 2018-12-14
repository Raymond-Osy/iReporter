const queryUsers = 'SELECT * from users where email = $1 and password = $2';
const getAllInterventions = 'SELECT * from incidents where type = $1';
const getInterventionById = 'SELECT * FROM incidents WHERE type = $1 AND id = $2';
const updateLocation = 'UPDATE incidents SET location = $1 WHERE id = $2 AND createdBy = $3';
const updateComment = 'UPDATE incidents SET comment = $1 WHERE id = $2 AND createdBy = $3';


const insertIntoUsers = 'INSERT INTO users(firstname, lastname, othernames, email, phoneNumber, username, password) values($1, $2, $3, $4, $5, $6, $7) RETURNING *';
const createIncident = 'INSERT INTO incidents(createdBy, type, location, status, comment) values($1, $2, $3, $4, $5) RETURNING *';

const Queries = {
  createIncident,
  getAllInterventions,
  getInterventionById,
  updateLocation,
  updateComment,
  queryUsers,
  insertIntoUsers
};

export default Queries;
