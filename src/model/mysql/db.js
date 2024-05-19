import mysql from "mysql2/promise";

const DEFAULT_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export class MySql {
  constructor() {
    this.connection = null;
  }

  connect = async () => {
    const connectionString = process.env.DB_URL ?? DEFAULT_CONFIG;
    console.log({ connectionString });
    this.connection = await mysql.createConnection(connectionString);
    await this.connection.connect(function (err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return false;
      }

      console.log("connected as id " + connection.threadId);
      return true;
    });
  }
}