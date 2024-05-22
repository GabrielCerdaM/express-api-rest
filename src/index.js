import { createApp } from "./app.js";
import { UserModel } from "./model/mysql/user.js";
import { AuthModel } from "./model/mysql/auth.js";
import { ServiceModel } from './model/mysql/service.js';
import { MySql } from "./model/mysql/db.js";
import { ClientModel } from "./model/mysql/client.js";
import { CeremonyModel } from "./model/mysql/ceremony.js";

try {
  const mysql = new MySql();
  if (!mysql.connect()) {
    console.log("Error al conectar base de datos");
    throw new Error("Error al conectar base de datos");
  }

  const authModel = new AuthModel({ db: mysql });
  const userModel = new UserModel({ db: mysql });
  const clientModel = new ClientModel({ db: mysql })
  const serviceModel = new ServiceModel({ db: mysql });
  const ceremonyModel = new CeremonyModel({ db: mysql })

  createApp({ authModel, userModel, serviceModel, clientModel, ceremonyModel });
} catch (error) {
  console.log({ error: error.message });
}