import { IFilter } from '@/interfaces/Filters.interface';
import { ProductService } from '@/services/product.service';
import { RequestHandler } from 'express';

export class ProductController {
    private service: ProductService;

    constructor() {
        this.service = new ProductService();
    }

    getProducts: RequestHandler = async (req, res): Promise<void> => {
        const { type, brand, prodClass } = req.query as IFilter;
        try {
            const products = await this.service.getProducts({type, brand, prodClass});
            res.status(200).send(products);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    // getProduct: RequestHandler = async (req, res): Promise<void> => {
    //     const productId = req.params.id;
    //     const request = await this.service.getProduct(productId);
    //     res.send(request);
    // };
}
