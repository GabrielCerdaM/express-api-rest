export class AuthModel {
  constructor({ db }) {
    this.db = db;
  }
  async login({ username, password }) {
    const [result] = await this.db.pool.query(
      "select * from user where username = ?",
      [username]
    );
    console.log({ result });
    return { result };
  }

  async create({ email, phone, username, password }) {
    const [result] = await this.db.pool.query(
      "INSERT INTO user (email,phone,username,password) values (?,?,?,?)",
      [email, phone, username, password]
    );
    return { result };
  }

  async logout() {
    return true;
  }
}
