const queryUsers = 'SELECT * from users where email = $1 and password = $2';

const insertIntoUsers = 'INSERT INTO users(firstname, lastname, othernames, email, phoneNumber, username, password) values($1, $2, $3, $4, $5, $6, $7) RETURNING *';

const Queries = {
  queryUsers,
  insertIntoUsers
};

export default Queries;
