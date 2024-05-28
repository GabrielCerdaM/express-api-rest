class ClientModel {
    constructor({ db }) {
        this.db = db;
    }
    async getAll() {
        try {
            const [result] = await this.db.pool.query(
                "select * from clients"
            );
            return { result };
        } catch (error) {
            console.log({ error });
            return false
        }
    }

    async create({ rut, name, address, phone, email, kindship }) {
        try {
            const [result] = await this.db.pool.query(
                // "SELECT 'Something sweet'"
                `INSERT INTO clients
                 (name, rut, address, phone, email, kindship)
                 VALUES
                 (?,?,?,?,?,?)`, [name, rut, address, phone, email, kindship]
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

module.exports = { ClientModel }