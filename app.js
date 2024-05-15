import express from "express";
import { createContactRouter } from "./routes/contact.js";
import { createUserRouter } from "./routes/user.js";
import productsRoutes from "./routes/products.routes.js";

const PORT = process.env.PORT ?? 8000;

export const createApp = ({ contactModel, userModel }) => {
  const app = express();

  app.get("/", (req, res) => {
    res.json({ error: null, payload: null });
  });

  app.use("/contact", createContactRouter({ contactModel }));
  app.use("/user", createUserRouter({ userModel }));
  app.use("/products", productsRoutes);

  app.listen(PORT, () => {
    console.log(`Server listening on PORT http://localhost:${PORT}`);
  });
};
