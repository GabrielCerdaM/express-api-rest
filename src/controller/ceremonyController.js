export class CeremonyController {
    constructor({ ceremonyModel }) {
        this.ceremonyModel = ceremonyModel
    }

    getAll = async (req, res) => {
        try {
            const ceremonies = await this.ceremonyModel.getAll()
            res.status(200).json({ ceremonies })
        } catch (error) {
            console.log({ error });
            res.status(500).json({ error })
        }
    }

    create = async (req, res) => {
        try {
            const { body } = req

            const {
                service_id,
                ceremony_type,
                schedule_date,
                schedule_time,
                executed
            } = body

            if (!service_id
                || !ceremony_type
                || !schedule_date
                || !schedule_time
            ) {
                throw new Error('faltan campos')
            }
            const newCeremonyId = await this.ceremonyModel.create({ service_id, ceremony_type, schedule_date, schedule_time, executed });

            if (!newCeremonyId) {
                throw new Error('Error al crear evento')
            }
            const { result: { insertId } } = newCeremonyId
            res.status(200).json({ insertId })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error })
        }
    }

    delete = async (req, res) => {
        try {
            const { ceremonyId } = req.params
            console.log({ceremonyId});
            await this.ceremonyModel.delete({ ceremonyId })
            res.status(200).json(true)
        } catch (error) {
            console.log({error});
            res.status(500).json({ error })
        }
    }
}