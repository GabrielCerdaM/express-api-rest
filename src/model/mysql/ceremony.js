export class CeremonyModel {
    constructor({ db }) {
        this.db = db;
    }
    async getAll() {
        try {
            const [result] = await this.db.pool.query(
                "select * from ceremonies"
            );
            return { result };
        } catch (error) {
            console.log({ error });
            return false
        }
    }

    async create({ service_id, ceremony_type, schedule_date, schedule_time, executed }) {
        try {
            const [result] = await this.db.pool.query(
                `INSERT INTO ceremonies
                (service_id,ceremony_type,scheduled_date,scheduled_time, executed)
                 VALUES
                 (?,?,?,?,?)`, [service_id, ceremony_type, schedule_date, schedule_time, executed]
            );
            return { result };
        } catch (error) {
            console.log({ error });
            return false
        }
    }
    async edit({ ceremoniesId }) {
        try {
            const [result] = await this.db.pool.query(
                "SELECT 'Something sweet'"
                // "select * from ceremonies"
            );
            return { result };
        } catch (error) {
            console.log({ error });
        }
    }
    async delete({ ceremonyId }) {
        try {
            const [result] = await this.db.pool.query(
                `delete from ceremonies where id = ?`
                , [ceremonyId]
            );
            return { result };
        } catch (error) {
            console.log({ error });
        }
    }
}