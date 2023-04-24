const dotenv = require("dotenv");
// const jasypt = require("jasypt");
// const fs = require("fs");

dotenv.config();

// Jasypt 설정 파일 로드
// const jasyptConfig = fs.readFileSync("./.properties");
// const decryptor = new jasypt({ config: jasyptConfig.toString() });

const config = {
  port: process.env.PORT,
  dbconfig: {
    server: process.env.DB_DEV_SERVER,
    port: parseInt(process.env.DB_DEV_PORT),
    pool: {
      max: 5,
      min: 1,
      idleTimeoutMillis: 900000,
    },
    options: {
      encrypt: false,
      database: process.env.DB_DEV_DATABASE,
      trustServerCertificate: true,
    },
    authentication: {
      type: "default",
      options: {
        userName: process.env.DB_DEV_USERNAME,
        password: process.env.DB_DEV_PASSOWRD,
      },
    },
  },
};

module.exports = { config };
