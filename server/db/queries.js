const queryUsers = 'SELECT * from users where email = $1 and password = $2';
const getAllInterventions = 'SELECT * from incidents where type = $1';
const getInterventionById = 'SELECT * FROM incidents WHERE type = $1 AND id = $2';

const insertIntoUsers = 'INSERT INTO users(firstname, lastname, othernames, email, phoneNumber, username, password) values($1, $2, $3, $4, $5, $6, $7) RETURNING *';
const createIncident = 'INSERT INTO incidents(createdBy, type, location, status, comment) values($1, $2, $3, $4, $5) RETURNING *';

const Queries = {
  createIncident,
  getAllInterventions,
  getInterventionById,
  queryUsers,
  insertIntoUsers
};

export default Queries;
