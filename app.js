const express = require("express");
const { sql, connPool } = require("./config/server.js");

const app = express();

app.set("port", process.env.PORT || 3000);

connPool;

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});

app.get("/list", async (req, res) => {
  try {
    const pool = await connPool;

    const result = await pool
      .request()
      //   .input("A", sql.Numeric, "2")
      .query(
        "select top 100 * from tbAdmin with(nolock) order by dtRegDate desc"
      );
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});
