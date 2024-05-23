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
    this.connection;
    this.pool;
  }

  connect = async () => {
    // console.log({
    //   DEFAULT_CONFIG,
    // });
    const connectionString = process.env.DB_URL ?? DEFAULT_CONFIG;
    try {
      // console.log({ connectionString });
      this.pool = mysql.createPool({
        host: DEFAULT_CONFIG.host,
        user: DEFAULT_CONFIG.user,
        database: DEFAULT_CONFIG.database,
        port: DEFAULT_CONFIG.port,
        password: DEFAULT_CONFIG.password,
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
      });

      // const connection = await pool.getConnection();
      // console.log({ pool, connection });
      // this.connection = connection;
      return true;
    } catch (error) {
      console.log({ errorMessage: error });
      return false;
    }
  };
}
