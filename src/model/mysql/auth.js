class AuthModel {
  constructor({ db }) {
    this.db = db;
  }
  async login({ username }) {
    const [result] = await this.db.pool.query(
      "select id, role_id, name, username, email from users where username = ?",
      [username]
    );
    console.log({ result });
    return { result };
  }

  async create({ role_id, name, email, username, password }) {
    const [result] = await this.db.pool.query(
      "INSERT INTO users (role_id,name,email,username,password) values (?,?,?,?,?)",
      [role_id, name, email, username, password]
    );
    return { result };
  }

  async logout() {
    return true;
  }
}

module.exports = { AuthModel }
