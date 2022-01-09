import Joi from 'joi';
import constant from '../../config/constant';

export namespace ReminderValidator {
  export const createReminder = Joi.object({
    description: Joi.string().required().messages({
      'any.required': constant.GIVEN_NAME_REQUIRED,
      'string.empty': constant.GIVEN_NAME_REQUIRED,
      'string.base': constant.GIVEN_NAME_INVALID,
    }),
  });
}
