import db from './index';

const dropUsersTable = 'DROP TABLE IF EXISTS users CASCADE;';

db.query(dropUsersTable, (err) => {
  if (err) {
    console.log(`Could not drop user table ${err}`);
  }
});
