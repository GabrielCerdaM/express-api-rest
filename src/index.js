import { createApp } from "./app.js";
import { UserModel } from "./model/mysql/user.js";
import { AuthModel } from "./model/mysql/auth.js";
import { MySql } from "./model/mysql/db.js";

try {
  const mysql = new MySql();
  if (!mysql.connect()) {
    console.log("Error al conectar base de datos");
    throw new Error("Error al conectar base de datos");
  }

  const userModel = new UserModel({ db: mysql });
  const authModel = new AuthModel({ db: mysql });

  createApp({ authModel, userModel });
} catch (error) {
  console.log({ error: error.message });
}
