const express = require("express");
const { sql, connPool } = require("./config/server.js");

const app = express();

app.set("port", process.env.PORT || 3000);

connPool;

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});

// app.get("/list", async (req, res) => {
//   try {
//     const pool = await connPool.getConnection((err, conn) => {
//       if (!err) {
//         // 연결 성공
//         const result = conn.query("select * from member");
//         console.log(result);
//       } else {
//         console.log(err);
//       }
//     });
//   } catch {}
// });
