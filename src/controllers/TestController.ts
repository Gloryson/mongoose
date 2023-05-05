import { Request, Response } from 'express';
import { Test } from '../models';
import { TypeTest } from '../models/Test';
import { ObjectId } from 'mongodb';



export class TestController {

  public async createTest(req: Request, res: Response): Promise<void> {
    try {
      const newTestFields: TypeTest = {
        name: req.query.name as string,
        age: req.query.age as string,
        other: String(req.query.other).split('-'),
      };
      const newTest = new Test(newTestFields);
      await newTest.save();
      res.send('Successful!');
    } catch (error) {
      res.send(error);
    }
  }

  public async showTest(req: Request, res: Response): Promise<void> {
    const result = await Test.find();
    res.send(result);
  }

  public async removeTest(req: Request, res: Response): Promise<void> {
    await Test.deleteOne({ _id: new ObjectId(req.query.id as string) });
    res.send('Deleted!');
  }
}