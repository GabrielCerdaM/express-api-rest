
describe.skip('AuthController', () => {
    // const AuthController = require('../../controller/auth.controller.js')
    // const AuthController = require("../../controller/auth.controller.js");

    let authController;
    let authModel;

    beforeEach(() => {
        authModel = {
            login: jest.fn(),
            register: jest.fn()
        }

    })
})

describe.skip('login', () => {
    it('should return user data if login is successfull', async () => {
        const req = { body: { username: "test", password: "test" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }

        const user = { id: 1, username: 'test' }

        authModel.login.mockResolvedValue(user);

        await authController.login(req, res)

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.user).toHaveBeenCalledWith(user)
    })
})