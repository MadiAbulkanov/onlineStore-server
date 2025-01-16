import { Router } from 'express';
import { Route } from '../interfaces/Route.inerface';
import { ProductController } from '@/controllers/product.controller';

export class ProductRoute implements Route {
    path = '/product';
    router = Router();
    private controller: ProductController;

    constructor() {
        this.controller = new ProductController();
        this.init();
    }

    private init() {
        this.router.get('/', this.controller.getProducts);
        // this.router.get('/:id', this.controller.getProduct);
    }
}
