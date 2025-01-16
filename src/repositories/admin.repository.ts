
import { Repository } from 'typeorm';
import { ProductDto } from "../dto/product.dto";
import { Product } from '../entities/product.entity';
import { appDataSource } from '../config/dataSource';

export class AdminRepo {
    private productRepo: Repository<Product>;

    constructor() {
        this.productRepo = appDataSource.getRepository(Product);
    }

    async createProduct(productDto: ProductDto) {
        try {
            return await this.productRepo.save(productDto)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export const adminRepo = new AdminRepo();
