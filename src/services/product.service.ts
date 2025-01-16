import { IFilter } from "@/interfaces/Filters.interface";
import { ProductRepo } from "@/repositories/product.repository";

export class ProductService {
    private repository: ProductRepo;

    constructor() {
        this.repository = new ProductRepo();
    }

    async getProducts(filters: IFilter) {
        const product = await this.repository.getProducts(filters);
        return product;
    }

    // async getProduct(productId: string) {
    //     const product = await this.repository.getProduct(productId);
    //     return product;
    // }
}
