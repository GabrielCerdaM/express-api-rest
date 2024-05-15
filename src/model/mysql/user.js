import db from "./db.js";
export class UserModel {
  async getAll() {
    const [result, fields] = await db.connection.query("select * from user");
    return { result, fields };
  }
}
