import { RequestHandler } from 'express';
import { Route } from './Route.inerface';

export interface AppInit {
  port: number;
  middlewares: RequestHandler[];
  routes: Route[];
}
