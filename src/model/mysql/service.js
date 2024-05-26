class ServiceModel {
    constructor({ db }) {
        this.db = db;
    }
    async getAll() {
        try {
            const [result] = await this.db.pool.query(
                "select * from services"
            );
            return { result };
        } catch (error) {
            console.log({ error });
        }
    }

    async create({ client_id, service_type, service_date, state }) {
        try {
            const [result] = await this.db.pool.query(
                `INSERT INTO services 
                (client_id,service_type, service_date,state)
                VALUES
                (?,?,?,?)`,
                [client_id, service_type, service_date, state]
            );
            return { result };
        } catch (error) {
            console.log({ error });
            return false;
        }
    }
    async edit({ serviceId }) {
        try {
            const [result] = await this.db.pool.query(
                "SELECT 'Something sweet'"
                // "select * from services"
            );
            return { result };
        } catch (error) {
            console.log({ error });
        }
    }
    async delete({ serviceId }) {
        try {
            const [result] = await this.db.pool.query(
                "SELECT 'Something sweet'"
                // "select * from services"
            );
            return { result };
        } catch (error) {
            console.log({ error });
        }
    }
}


module.exports = {
    ServiceModel
}