import * as bodyParser from 'body-parser';
import { Application } from 'express';
import { DBConnection } from '../database/dbConnection';
export class Kernel {
  public initBodyParser(app: Application): void {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  }

 

  public databaseConnection(): Promise<void> {
    return DBConnection.databaseConnection();
  }

  
}
