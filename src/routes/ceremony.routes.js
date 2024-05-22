import { Router } from 'express';
import { CeremonyController } from '../controller/ceremonyController.js';

export const createCeremonyRouter = ({ ceremonyModel }) => {
    const router = Router();

    const ceremonyCtrl = new CeremonyController({ ceremonyModel })

    router.get('/', ceremonyCtrl.getAll)

    router.post('/', ceremonyCtrl.create)
  
    router.delete('/:ceremonyId', ceremonyCtrl.delete)
  
    return router
} 