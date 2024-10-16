import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
});

pool
  .getConnection()
  .then(() => console.log('Connected to the database.'))
  .catch((err) => console.error('Database connection error:', err));

export default pool;
