const sql = require("mariadb");
const { config } = require("./config");

const connPool = sql.createPool(config.dbconfig);

connPool
  .getConnection()
  .then((conn) => {
    console.log("Connected to MariaDB!");
    conn.release(); // release to pool
  })
  .catch((err) => {
    console.log("Failed to connect to MariaDB:", err);
  });

module.exports = { sql, connPool };
