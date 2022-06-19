import { NextFunction, Request, Response } from 'express';

export default class TestController {
  public static initTest(req: Request, res: Response) {
    res.status(200).send('Test project initialize.');
  }
}