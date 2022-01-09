import { Application } from 'express';
import UserRoute from './User.route';
import ReminderRoute from './Reminder.route';

export class Routes {
  constructor() {
  }
  public routes(app: Application): void {
    app.use('/api/users', UserRoute);
    app.use('/api/reminders', ReminderRoute);
  }
}
