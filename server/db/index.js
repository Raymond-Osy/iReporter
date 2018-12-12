// import dotenv from 'dotenv';
// import pg from 'pg-promise';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.query(createUserTable)
  .then((response) => {
    console.log(response);
    pool.end();
  })
  .catch((error) => {
    console.log(error);
    pool.end();
  });

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback)
};
