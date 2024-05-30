const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

class AuthController {

  constructor({ authModel }) {
    this.authModel = authModel;
  }

  register = async (req, res) => {
    const { role_id, name, email, username, password } = req.body;

    if (!role_id || !email || !name || !username || !password) {
      return res.status(400).json(false);
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const { result } = await this.authModel.create({
        role_id,
        name,
        email,
        username,
        password: hashedPassword
      });
      if (!result) {
        throw new Error("Error al registrar usuario");
      }
      const { insertId } = result;
      return res.status(200).json({ insertId });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ error });
    }
  };

  login = async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        throw new Error("Credencial incorrecta");
      }
      const { result } = await this.authModel.login({ username });
      // console.log({ result });
      // debe validar la comparacion con solo un registro
      if (result.length <= 0) {
        throw new Error("Credenciales invalidas");
      }
      const user = result[0];

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) throw new Error('Credenciales incorrectas')

      const token = jwt.sign({
        user: result
      },
        SECRET, { expiresIn: 60 });

      return res.status(200).json({ token });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  logout = async (req, res) => {
    res.send(true);
  };
}

module.exports = {
  AuthController
}