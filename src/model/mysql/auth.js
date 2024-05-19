export class AuthModel {
  constructor({ db }) {
    this.db = db;
  }
  async login({ username, password }) {
    const [result] = await this.db.connection.query(
      "select email from user where username = ? and password = ?",
      [username, password]
    );
    this.db.connection.end();
    return { result };
  }

  async create({ email, username, password }) {
    const [result] = await this.db.connection.query(
      "INSERT INTO user (email,username,password) values (?,?,?)",
      [email, username, password]
    );
    this.db.connection.end();
    return { result };
  }

  async logout() {
    return true;
  }
}
