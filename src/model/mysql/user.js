export class UserModel {
  constructor({ db }) {
    this.db = db;
  }
  async getAll() {
    try {
      const connection = await this.db.getConnection();
      const [result] = await connection.query(
        "select email,username from user"
      );
      return { result };
    } catch (error) {
      console.log({ error });
    }
  }
}
