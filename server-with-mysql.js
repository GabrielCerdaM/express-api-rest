import { createApp } from "./app.js";
import { ContactModel } from "./model/mysql/contact.js";
import { UserModel } from "./model/mysql/user.js";

const contactModel = new ContactModel();
const userModel = new UserModel();

createApp({ contactModel, userModel });
