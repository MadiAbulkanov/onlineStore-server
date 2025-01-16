import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'online-shop',
  schema: 'online-shop',
  synchronize: true,
  logging: true,
  entities: ['src/entities/*{.js,.ts}']
});