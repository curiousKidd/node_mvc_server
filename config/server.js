const sql = require("mariadb");
const { config } = require("./config");

const poll = new sql.createPool(config);

poll
  .getConnection()
  .then((conn) => {
    const result = conn.query("select * from member");
    console.log(result);
    console.log("Connected to MariaDB!");
    conn.release(); // release to pool
  })
  .catch((err) => {
    console.log("Failed to connect to MariaDB:", err);
  })
  .finally(() => {
    console.log("정상 연결 확인 완료");
  });

module.exports = { sql, poll };
