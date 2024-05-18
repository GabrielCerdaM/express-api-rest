import mysql from "mysql2/promise";

const DEFAULT_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const db = async () => {

  const connectionString = process.env.DB_URL ?? DEFAULT_CONFIG;

  let connection;

  try {
    connection = await mysql.createConnection(connectionString);

    await connection.connect(function (err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }

      console.log("connected as id " + connection.threadId);
    });

    return connection
  } catch (error) {
    console.log({ error });
  }
}


export default { connection: db };
