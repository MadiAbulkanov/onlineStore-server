import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from '../interfaces/Product.interface';

@Entity('products')
export class Product implements IProduct {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    price!: number;

    @Column()
    type!: string;

    @Column()
    brand!: string;

    @Column({ nullable: true })
    image!: string;

    @Column({ default: false })
    topSeller!: boolean;

    @Column({ default: false })
    newProd!: boolean;

    @Column({ default: false })
    sale!: boolean;
}
