import { Express } from 'express';
import { connect } from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';



export class AppStarter {
  
  private port: string | number;
  private mongoURI: string;
  private secretString: string;

  constructor (private app: Express) {
    this.initDotenv();
    this.port = process.env.PORT;
    this.mongoURI = process.env.MONGO_URI;
    this.secretString = process.env.SECRET_STRING;
    this.useCors();
    this.useCookieParser();
    this.connectMongo();
    this.initListen();
  }

  private initDotenv(): void {
    dotenv.config();
  }

  private useCors(): void {
    this.app.use(cors({ origin: true, credentials: true }));
  }

  private useCookieParser(): void {
    this.app.use(cookieParser(this.secretString));
  }

  private async connectMongo(): Promise<void> {
    try {
      await connect(this.mongoURI);
      console.log('MongoDB connection is successfull!');
    } catch (error) { console.log(error) }
  }

  private initListen(): void {
    this.app.listen(this.port, () => {
      console.log(`Application started on port ${this.port}!`);
    })
  }
}