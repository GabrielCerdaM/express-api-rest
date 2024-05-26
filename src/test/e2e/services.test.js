// test/app.test.js
const supertest = require('supertest');
const { createApp } = require('../../app.js');
const { UserModel } = require('../../model/mysql/user.js');
const { AuthModel } = require('../../model/mysql/auth.js');
const { ServiceModel } = require('../../model/mysql/service.js');
const { MySql } = require('../../model/mysql/db.js');
const { ClientModel } = require('../../model/mysql/client.js');
const { CeremonyModel } = require('../../model/mysql/ceremony.js');

describe('API Endpoints', () => {
    let api;
    let app;
    let mysql;
    let authModel, userModel, clientModel, serviceModel, ceremonyModel;

    beforeAll(async () => {
        // Configurar y conectar la base de datos
        mysql = new MySql();
        if (!mysql.connect()) {
            throw new Error('Error al conectar base de datos');
        }

        // Crear instancias de los modelos
        authModel = new AuthModel({ db: mysql });
        userModel = new UserModel({ db: mysql });
        clientModel = new ClientModel({ db: mysql });
        serviceModel = new ServiceModel({ db: mysql });
        ceremonyModel = new CeremonyModel({ db: mysql });

        const { name, address, phone, email, kindship } = {
            name: "nombre cliente",
            address: 'direccion cliente',
            phone: '+569 9876 5432',
            email: 'email@email.cl',
            kindship: 'parentezco',
        }

        const { service_type, service_date, state } = {
            service_type: 'sepultacion',
            service_date: '2023/08/24',
            state: 'PENDIENTE INSTALACION',
        }
        await mysql.pool.query('delete from services');
        await mysql.pool.query('delete from clients');
        const { result } = await clientModel.create({ name, address, phone, email, kindship })
        const { result: { insertId } } = await serviceModel.create({ client_id: result.insertId, service_type, service_date, state })

        // Crear la aplicación
        app = createApp({
            authModel,
            userModel,
            clientModel,
            serviceModel,
            ceremonyModel
        });
        api = supertest(app);
    });

    afterAll(async () => { });

    test('should return 200 for GET /services', async () => {
        await api
            .get('/services')
            .expect(200)
            .expect('Content-Type', /application\/json; charset=utf-8/)
    });

    test('should return array of services for GET /services', async () => {
        const response = await api.get('/services')
        console.log({body:response.body});
        expect(response.body).toHaveLength(1)
    });
});