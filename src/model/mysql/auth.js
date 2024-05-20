export class AuthModel {
  constructor({ db }) {
    this.db = db;
  }
  async login({ username, password }) {
    const connection = await this.db.getConnection();
    const [result] = await connection.query(
      "select email from user where username = ? and password = ?",
      [username, password]
    );
    return { result };
  }

  async create({ email, username, password }) {
    const [result] = await this.db.query(
      "INSERT INTO user (email,username,password) values (?,?,?)",
      [email, username, password]
    );
    return { result };
  }

  async logout() {
    return true;
  }
}
