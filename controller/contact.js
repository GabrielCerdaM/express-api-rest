export class ContactController {
  constructor({ contactModel }) {
    this.contactModel = contactModel;
  }

  getAll = async (req, res) => {
    try {
      const contact = await this.contactModel.getAll();
      res.json(contact);
    } catch (error) {
      res.json({ error: error.message });
    }
  };
}
