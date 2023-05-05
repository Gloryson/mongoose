import { Express } from 'express';
import { TestController } from '../controllers';



export class TestRouter extends TestController {
  
  constructor(private app: Express) {
    super();
    this.initRoutes();
  }

  private initRoutes() {
    this.app.get('/create', this.createTest);
    this.app.get('/show', this.showTest);
    this.app.get('/delete', this.removeTest);
  }
}