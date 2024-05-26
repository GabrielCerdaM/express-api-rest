class ServiceController {
    constructor({ serviceModel, clientModel }) {
        this.serviceModel = serviceModel;
        this.clientModel = clientModel;
    }

    getAll = async (req, res) => {
        try {
            const services = await this.serviceModel.getAll();
            if (!services.result) {
                res.status(500).json({ services });
            }
            res.status(200).json(services.result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    create = async (req, res) => {
        try {
            const {
                service_type,
                service_date,
                state,
                name,
                address,
                phone,
                email,
                kindship
            } = req.body

            // es necesario crear un usuario nuevo aqui
            // { name, address, phone, email, kindship }
            if (!name || !address || !phone || !email) {
                throw new Error('Falta informacion del cliente')
            }
            const newClientId = await this.clientModel.create({ name, address, phone, email, kindship });

            console.log({ newClientId });

            if (!newClientId) {
                throw new Error('No es posible crear un nuevo usuario')
            }

            const { result: { insertId } } = newClientId
            console.log({insertId});
            if (!newClientId || !service_type || !service_date || !state) {
                throw new Error('Falta informacion necesaria del servicio')
            }
            const newServiceId = await this.serviceModel.create({ client_id: insertId, service_type, service_date, state })

            console.log({ newServiceId });

            res.status(200).json({ newServiceId });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    edit = async (req, res) => {
        const { serviceId } = req.params();
        console.log({ serviceId });
        res.status(200).json(true);
    }

    delete = async (req, res) => {
        const { serviceId } = req.params();
        res.status(200).json(true);
    }

}

module.exports = {
    ServiceController
}