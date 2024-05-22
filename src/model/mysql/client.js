export class ClientModel {
    constructor({ db }) {
        this.db = db;
    }
    async getAll() {
        try {
            const [result] = await this.db.pool.query(
                "select * from client"
            );
            return { result };
        } catch (error) {
            console.log({ error });
            return false
        }
    }

    async create({ name, address, phone, email, kindship }) {
        try {
            const [result] = await this.db.pool.query(
                // "SELECT 'Something sweet'"
                `INSERT INTO CLIENTS
                 (name, address, phone, email, kindship)
                 VALUES
                 (?,?,?,?,?)`, [name, address, phone, email, kindship]
                // "select * from client"
            );
            return { result };
        } catch (error) {
            console.log({ error });
            return false
        }
    }
    async edit({ clientId }) {
        try {
            const [result] = await this.db.pool.query(
                "SELECT 'Something sweet'"
                // "select * from client"
            );
            return { result };
        } catch (error) {
            console.log({ error });
        }
    }
    async delete({ clientId }) {
        try {
            const [result] = await this.db.pool.query(
                "SELECT 'Something sweet'"
                // "select * from client"
            );
            return { result };
        } catch (error) {
            console.log({ error });
        }
    }
}