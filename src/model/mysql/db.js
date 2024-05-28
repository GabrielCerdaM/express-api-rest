const mysql = require("mysql2/promise");


class MySql {
  constructor() {
    this.connection;
    this.pool;
  }

  connect = async () => {
    const { NODE_ENV, DB_URI, DB_URI_TEST } = process.env
    const connectionString = NODE_ENV === 'test' ? DB_URI_TEST : DB_URI;
    console.log({connectionString});
    try {

      this.pool = mysql.createPool({
        uri: connectionString,
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
      });
      return true;
    } catch (error) {
      console.log({ errorMessage: error });
      return false;
    }
  };
}


module.exports = {
  MySql
}