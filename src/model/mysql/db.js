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
    // console.log({
    //   DEFAULT_CONFIG,
    // });
    const connectionString = process.env.DB_URL ?? DEFAULT_CONFIG;
    try {
      // console.log({ connectionString });
      this.connection = await mysql.createConnection(connectionString);

      const resp = await this.connection.connect();

      console.log({ resp });

      return true;
    } catch (error) {
      console.log({ errorMessage: error });
      return false;
    }
  };
}
