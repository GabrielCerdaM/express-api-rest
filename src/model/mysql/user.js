import db from "./db.js";

export class UserModel {
  async getAll() {
    try {
      const [result, fields] = await db.connection.query("select email,username from user");
      return { result };
    } catch (error) {
      console.log({ error });
    }

  }
}
