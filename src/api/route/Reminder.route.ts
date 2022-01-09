import express from 'express';
import Container from 'typedi';
import { Auth } from '../../middleware/auth';
import { RemindersController } from '../controller/Reminders.controller';

class ReminderRoute {
  public router: express.Router = express.Router();
  private auth: Auth;
  private remindersController: RemindersController;
  constructor() {
    this.auth = new Auth();
    this.remindersController = Container.get(RemindersController);
    this.assign();
  }
  //////Remindertask api's-(create reminder,get,updatestatus,delete.)

  private assign() {
    this.router.post('/createReminder', 
    this.auth.auth,
    this.remindersController.createReminder);

    this.router.get('/getReminder', 
     this.auth.auth,
     this.remindersController.getReminder);

    this.router.get('/getTodayReminder',
     this.auth.auth, 
     this.remindersController.getTodaysReminder);

    this.router.put('/updateReminder',
     this.auth.auth,
     this.remindersController.updateReminder);
     
    this.router.put('/updateReminderStatus',
     this.auth.auth,
     this.remindersController.updateStatus);

    this.router.delete('/deleteReminder',
     this.auth.auth,
     this.remindersController.deleteReminder);

    this.router.delete('/deleteCompletedReminder', 
    this.auth.auth,
    this.remindersController.deleteCompletedReminder);

  }
}

export default new ReminderRoute().router;
