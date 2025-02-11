import { DataSource } from 'typeorm';
import 'dotenv/config';

export const appDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  
  // username: process.env.USER,
  // password: process.env.PASSWORD,
  // database: process.env.PGDATABASE,
  // host: 'localhost',
  // port: 5432,
  // username: 'postgres',
  // password: 'root',
  // database: 'online-shop',
  // schema: 'online-shop',
  synchronize: true,
  logging: true,
  entities: ['src/entities/*{.js,.ts}']
});