import { Router } from 'express';
import ProfileController from '../controllers/profileController';

const router = Router();
const profileController = new ProfileController();

const setRoutes = () => {
    router.post('/profiles', profileController.createProfile);
    router.get('/profiles/:id', profileController.getProfile);
    router.put('/profiles/:id', profileController.updateProfile);
    router.delete('/profiles/:id', profileController.deleteProfile);
};

setRoutes();

export default router;