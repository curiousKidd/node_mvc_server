const express = require("express");
const { sql, poll } = require("./config/server.js");

const app = express();

app.set("port", process.env.PORT || 3000);

poll;

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});

app.get("/test", () => {
  poll
    .getConnection()
    .then((conn) => {
      // 연결 성공
      const result = conn.query("select * from member");
      console.log(result);
      conn.release();
    })
    .catch((err) => {
      // 연결 실패
      console.log(err);
    });
});

app.get("/list", async (req, res) => {
  try {
    const conn = await poll.getConnection();
    const result = await conn.query("SELECT * FROM member");
    console.log(result);
    conn.release();
  } catch (err) {
    console.log(err);
  }
});
