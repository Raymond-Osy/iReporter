import db from './index';

const createUserTable = `CREATE TABLE users(
    Id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    othernames VARCHAR,
    email VARCHAR(40) UNIQUE NOT NULL,
    phoneNumber VARCHAR(40),
    username VARCHAR,
    registered TIMESTAMP default current_timestamp,
    password VARCHAR(40) NOT NULL,
    isAdmin Boolean default false)`;

db.query(createUserTable, (err) => {
  if (err) {
    console.log(`Could not create user table ${err}`);
  }
});
