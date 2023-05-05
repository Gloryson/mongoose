import express from 'express';
import { AppStarter } from './components';
import { TestRouter } from './routes';

const app = express();

const appStarter = new AppStarter(app);
const testRouter = new TestRouter(app);