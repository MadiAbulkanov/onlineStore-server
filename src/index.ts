import cors from 'cors';
import logger from './middlewares/logger';
import App from './app';
import { AdminRoute } from './routes/admin.route';
import { ProductRoute } from '@/routes/product.route';

const app = new App({
  port: 8000,
  middlewares: [logger(), cors()],
  routes: [ new AdminRoute(), new ProductRoute() ],
});

app.listen();
