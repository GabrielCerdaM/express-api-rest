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
      return false;
    }
  }

  async create({
    role_id,
    username,
    password,
    email,
    phone,
  }) {
    try {
      const [result] = await this.db.pool.query(
        `INSERT INTO users (role_id,email,username,phone,password) VALUES (?,?,?,?,?)`,
        [role_id, email, username, phone, password]
      );
      return { result };
    } catch (error) {
      console.log({ error });
      return false;
    }
  }

  async update({
    role_id,
    name,
    username,
    password,
    email,
    phone,
  }, userId) {
    // Array para almacenar los fragmentos de la consulta y los valores
    const fields = [];
    const values = [];

    // Añadir los campos que se van a actualizar si se proporcionan
    if (role_id) {
      fields.push('role_id = ?');
      values.push(role_id);
    }

    if (name) {
      fields.push('name = ?');
      values.push(name)
    }

    if (email) {
      fields.push('email = ?');
      values.push(email);
    }

    if (username) {
      fields.push('username = ?');
      values.push(username);
    }
    if (phone) {
      fields.push('phone = ?');
      values.push(phone);
    }
    if (password) {
      fields.push('password = ?');
      values.push(password);
    }

    // Verificar si se ha proporcionado un ID
    if (!userId) {
      throw new Error("El identificador es necesario para actualizarlo");
    }

    // Construir la parte de la consulta `SET`
    const setClause = fields.join(', ');

    // Añadir el ID al final de los valores
    values.push(userId);

    // Construir la consulta completa
    const query = `UPDATE users SET ${setClause} WHERE id = ?`;
    console.log(query);
    try {
      const [result] = await this.db.pool.query(query, values);
      return { result };
    } catch (error) {
      console.log({ error });
      return false;
    }
  }
}
