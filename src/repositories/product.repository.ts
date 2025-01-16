
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { appDataSource } from '../config/dataSource';
import { IFilter } from '@/interfaces/Filters.interface';

export class ProductRepo {
    public productRepo: Repository<Product>;

    constructor() {
        this.productRepo = appDataSource.getRepository(Product);
    }

    async getProducts(filters: IFilter) { 
        const where: { 
            type?: string, 
            brand?: string, 
            topSeller?: boolean,
            newProd?: boolean,
            sale?: boolean
        } = {};

        if (filters.type) {
            where.type = filters.type;
        } 
        
        if (filters.brand) {
            where.brand = filters.brand;
        }

        if (filters.prodClass === 'topSeller') {
            where.topSeller = true;
        }

        if (filters.prodClass === 'newProd') {
            where.newProd = true;
        }

        if (filters.prodClass === 'sale') {
            where.sale = true;
        }

        const products = await this.productRepo.find({ where });
        return products;
    }

    // async getProduct(productId: string) { 
    //     try {                      
    //         const id = Number(productId);      
    //         const product = await this.productRepo.findOne({ where: { id } });
    //         return product;
    //     } catch (error: any) {
    //         throw new Error(error.message);
    //     }
    // }
}

export const adminRepo = new ProductRepo();
