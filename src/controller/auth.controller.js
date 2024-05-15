import bcrypt from 'bcrypt';
export class AuthController {
    constructor({ authModel }) {
        this.authModel = authModel;
    }
    register = async (req, res) => {
        const { email, username, password } = req.body
        if (!email || !username || !password) {
            return res.status(400), send('Faltan datos')
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10)
            const resp = await this.authModel.create({ email, username, password: hashedPassword })
            return res.status(200).json({ resp })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    login = async (req, res) => {
        try {
            const {
                username,
                password
            } = req.body

            if (!username || !password) {
                throw new Error('Credencial incorrecta')
            }
            const resp = await this.authModel.login({ username, password });
            if (!resp.result) {
                throw new Error(false)
            }
            res.json(true)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }



    logout = async (req, res) => {
        res.send(true);
    }
}