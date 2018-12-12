import db from './index';

const createUserTable = `CREATE TABLE users(
    userId SERIAL PRIMARY KEY,
    email VARCHAR(40) UNIQUE NOT NULL,
    password VARCHAR(40) NOT NULL,
    registerdOn TIMESTAMP default current_timestamp)`;