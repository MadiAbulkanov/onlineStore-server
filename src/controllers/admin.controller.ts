import { RequestHandler } from 'express';
import { AdminService } from '../services/admin.service';
import { ProductDto } from '../dto/product.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export class AdminController {
    private service: AdminService;

    constructor() {
        this.service = new AdminService();
    }

    createProduct: RequestHandler = async (req, res): Promise<void> => {
        try {
            const productDto = plainToInstance(ProductDto, {
                ...req.body,
                price: parseFloat(req.body.price),
            });

            if (req.file) {
                productDto.image = req.file.filename;

            }
            const validationErrors = await validate(productDto);

            if (validationErrors.length > 0) {
                res.status(400).json({ errors: validationErrors });
                return;
            }

            const requests = await this.service.createProduct(productDto);
            res.status(201).send(requests);
        } catch (error) {
            console.error('Error message:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };
}
