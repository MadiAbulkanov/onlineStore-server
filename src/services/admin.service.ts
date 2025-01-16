import { ProductDto } from "../dto/product.dto";
import { AdminRepo } from "../repositories/admin.repository";

export class AdminService {
    private repository: AdminRepo;

    constructor() {
        this.repository = new AdminRepo();
    }

    async createProduct(productDto: ProductDto) {
        const product = await this.repository.createProduct(productDto);
        return product;
    }
}
