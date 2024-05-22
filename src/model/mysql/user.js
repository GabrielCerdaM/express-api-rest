export class UserModel {
  constructor({ db }) {
    this.db = db;
  }
  async getAll() {
    try {
      const [result] = await this.db.pool.query(
        "select email,username from users"
      );
      return { result };
    } catch (error) {
      console.log({ error });
    }
  }
}
