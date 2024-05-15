import { Router } from "express";
import { ContactController } from "../controller/contact.js";

export const createContactRouter = ({ contactModel }) => {
  const router = Router();

  const contactController = new ContactController({ contactModel });

  router.get("/", contactController.getAll);

  return router;
};
