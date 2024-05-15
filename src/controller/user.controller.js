export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  getAll = async (req, res) => {
    try {
      const user = await this.userModel.getAll();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
