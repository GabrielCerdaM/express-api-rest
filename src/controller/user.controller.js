class UserController {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  getAll = async (req, res) => {
    try {
      const user = await this.userModel.getAll();
      res.status(200).json(user.result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const {
        role_id,
        username,
        password,
        email,
        phone,
      } = req.body
      if (
        !role_id
        || !username
        || !password
        || !email
        || !phone
      ) {
        throw new Error('Faltan datos para crear el usuario')
      }
      const result = await this.userModel.create({
        role_id,
        username,
        password,
        email,
        phone,
      });
      res.status(200).json({ result })
    } catch (error) {
      res.status(500).json({ error })
    }
  }
  update = async (req, res) => {
    try {
      const { userId } = req.params
      const {
        name,
        role_id,
        username,
        password,
        email,
        phone,
      } = req.body

      const result = await this.userModel.update({
        name,
        role_id,
        username,
        password,
        email,
        phone,
      }, userId);
      res.status(200).json({ result })
    } catch (error) {
      console.log({ error });
      res.status(500).json({ error })
    }
  }
  delete = async (req, res) => {
    try {
      const { userId } = req.params
      const resp = await this.userModel.delete();
    } catch (error) {
      res.status(500).json({ error })
    }
  }
}


module.exports = {
  UserController
}