export class UserModel {
  constructor({ db }) {
    this.db = db;
  }
  async getAll() {
    try {
      const [result, fields] = await this.db.connection.query(
        "select email,username from user"
      );
      this.db.connection.end();
      return { result };
    } catch (error) {
      console.log({ error });
    }
  }
}
