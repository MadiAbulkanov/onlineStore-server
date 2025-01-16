import { Router } from 'express';
import { Route } from '../interfaces/Route.inerface';
import { AdminController } from '../controllers/admin.controller';
import { upload } from '@/middlewares/multer';

export class AdminRoute implements Route {
    path = '/admin';
    router = Router();
    private controller: AdminController;

    constructor() {
        this.controller = new AdminController();
        this.init();
    }

    private init() {
        this.router.post('/', upload.single('image'), this.controller.createProduct);
    }
}
