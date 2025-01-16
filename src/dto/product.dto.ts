import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductDto {
    @Expose()
    @IsNotEmpty({ message: 'Продукт не может быть создан без названия' })
    name!: string;

    @Expose()
    @IsNotEmpty({ message: 'Продукт не может быть создан без цены' })
    @IsNumber({}, { message: 'Цена должна быть числом' })
    price!: number;

    @Expose()
    @IsNotEmpty({ message: 'Продукт не может быть создан без типа' })
    type!: string;

    @Expose()
    @IsNotEmpty({ message: 'Продукт не может быть создан без бренда' })
    brand!: string;

    @Expose()
    @IsOptional()
    image?: string;
}
