import { createApp } from "./app.js";
import { UserModel } from "./model/mysql/user.js";
import { AuthModel } from './model/mysql/auth.js';
const userModel = new UserModel();
const authModel = new AuthModel();
createApp({authModel, userModel });
