
import mysql from "mysql2/promise";
import fs from "node:fs";
import path from "node:path";

const caPath = path.join(process.cwd(), "certs", "ca.pem");
const caCert = fs.readFileSync(caPath, "utf8");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 11434),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: caCert,
    rejectUnauthorized: true,
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
