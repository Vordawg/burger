let connection;

const orm = {
  connectDb: async function () {
    connection = await require('../config/connection.js')();
  },

  closeDBConnection: function () {
    return connection.end();
  },

  selectAll: async function ({ tableName }, cb) {
    try {
      const queryString = 'SELECT * FROM ??';
      const result = await connection.query(
        queryString,
        tableName,
      );
      console.table(result);
      cb(result);
    } catch (error) {
      console.table(error);
    }
  },

  insertOne: async function ({ tableName, column, value }) {
    try {
      const queryString = 'INSERT INTO ?? (??) VALUES (??)';
      const result = await connection.query(
        queryString,
        [tableName, column, value],
      );
      console.table(result);
    } catch (error) {
      console.table(error);
    }
  },

  updateOne: async function ({ tableName, column1Name, column1Value, column2Name, column2Valuevalue, idValue }) {
    try {
      const queryString = 'UPDATE ?? SET ?? = ??, ?? = ?? WHERE id = ??';
      const result = await connection.query(
        queryString,
        [tableName, column1Name, column1Value, column2Name, column2Valuevalue, idValue],
      );
      console.table(result);
    } catch (error) {
      console.table(error);
    }
  },
};

module.exports = orm;