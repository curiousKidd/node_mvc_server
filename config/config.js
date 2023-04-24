const dotenv = require("dotenv");
// const jasypt = require("jasypt");
// const fs = require("fs");

dotenv.config();

const config = {
  connectionLimit: 10, // connection pool의 최대 연결 수
  // queueLimit: 0, // connection pool queue에 대한 제한, 0이면 무제한
  acquireTimeout: 10000, // connection 획득 timeout
  idleTimeoutMillis: 10000,
  // waitForConnections: true, // connection pool에 connection이 없을 경우 대기 여부
  host: process.env.DB_DEV_SERVER, // DB 서버 호스트
  port: process.env.DB_DEV_PORT,
  user: process.env.DB_DEV_USERNAME, // DB 계정
  password: process.env.DB_DEV_PASSOWRD, // DB 계정 비밀번호
  database: process.env.DB_DEV_DATABASE, // 사용할 DB 이름
  // charset: 'utf8mb4', // 캐릭터셋
  // timezone: 'utc', // 타임존
  // supportBigNumbers: true, // BigInt type의 값을 조회하기 위해 true로 설정
  // bigNumberStrings: true, // BigInt type 값을 string으로 조회하기 위해 true로 설정
  // dateStrings: true, // Date type 값을 string으로 조회하기 위해 true로 설정
  // multipleStatements: true, // 여러 개의 SQL 문장을 실행할 수 있도록 true로 설정
  // ssl: {
  //   // SSL 옵션, 필요할 경우 설정
  //   ca: fs.readFileSync(__dirname + '/ssl/ca.pem'),
  //   key: fs.readFileSync(__dirname + '/ssl/client-key.pem'),
  //   cert: fs.readFileSync(__dirname + '/ssl/client-cert.pem')
  // }
};

module.exports = { config };
