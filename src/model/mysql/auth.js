import db from "./db.js";
export class AuthModel {
    async login({ username, password }) {
        const [result] = await db.connection.query('select email from user where username = ? and password = ?', [username, password]);
        return { result };
    }

    async create({ email, username, password }) {
        const [result] = await db.connection.query('INSERT INTO user (email,username,password) values (?,?,?)', [email, username, password])
        return { result }
    }

    async logout() {
        return true;
    }

}
