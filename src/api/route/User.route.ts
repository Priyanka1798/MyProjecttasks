import express from 'express';
import Container from 'typedi';
import { HttpRequestValidator } from '../../middleware/httpRequestValidator';
import { UsersController } from '../controller/Users.controller';
import { UsersValidator } from '../validator/usersValidator';

class UserRoute {
  public router: express.Router = express.Router();
  private httpRequestValidator: HttpRequestValidator;
  private usersController: UsersController;
  constructor() {
    this.httpRequestValidator = new HttpRequestValidator();
    this.usersController = Container.get(UsersController);
    this.assign();
  }
  private assign() {
    this.router.post(
      '/register',
      this.httpRequestValidator.validate('body', UsersValidator.register),
      this.usersController.registerUser
    );
    this.router.post(
      '/login', 
      this.httpRequestValidator.validate('body', UsersValidator.login),
      this.usersController.loginAccount);

    this.router.post(
      '/forgotPwd', 
      this.httpRequestValidator.validate('body', UsersValidator.login), 
      this.usersController.forgotPwd);
  }
}

export default new UserRoute().router;
