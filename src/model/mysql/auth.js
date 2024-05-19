import db from "./db.js";
export class AuthModel {
    constructor({db}) {
        this.db = db
    }
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
