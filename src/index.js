const { createApp } = require("./app.js");
const { UserModel } = require("./model/mysql/user.js");
const { AuthModel } = require("./model/mysql/auth.js");
const { ServiceModel } = require('./model/mysql/service.js');
const { MySql } = require("./model/mysql/db.js");
const { ClientModel } = require("./model/mysql/client.js");
const { CeremonyModel } = require("./model/mysql/ceremony.js");
const PORT = process.env.PORT ?? 3000;

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

  const app = createApp({ authModel, userModel, serviceModel, clientModel, ceremonyModel });

  app.listen(PORT, () => {
    console.log(`Server listening on PORT http://localhost:${PORT}`);
  });

} catch (error) {
  console.log({ error: error.message });
}