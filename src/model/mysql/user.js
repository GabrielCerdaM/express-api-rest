
export class UserModel {
  constructor({db}) {
    this.db = db;
  }
  async getAll() {
    try {
      console.log({ db });
      // const { result: connection } = db.connection();
      const [result, fields] = await this.db.connection.query("select email,username from user");
      return { result };
    } catch (error) {
      console.log({ error });
    }

  }
}
