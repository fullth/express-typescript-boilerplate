import express, { Application, Request, Response, NextFunction } from 'express';
import router from './router';

export default class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.setRoutes();
  }

  private setRoutes(): void {
    this.app.use('/api', router);
    this.app.use((req: Request, res: Response) => { res.status(404).send('NOT FOUND'); });
  }

  public async createServer(port: number): Promise<void> {
    this.app.listen(port, () => {
      console.log(`
######################################
🛡️ Server listening on port: ${port}🛡️
######################################
      `);
    });
  }
}