import Joi from 'joi';
import constant from '../../config/constant';

export namespace UsersValidator {

  export const register = Joi.object({

    name: Joi.string().required().messages({
      'any.required': constant.GIVEN_NAME_REQUIRED,
      'string.empty': constant.GIVEN_NAME_REQUIRED,
      'string.base': constant.GIVEN_NAME_INVALID,
    }),
    email: Joi.string().required().email().messages({
      'any.required': constant.EMAIL_REQUIRED,
      'string.empty': constant.EMAIL_REQUIRED,
      'string.base': constant.TYPE_EMAIL,
      'string.email': constant.EMAIL_INVALID,
    }),
    password: Joi.string().required().min(8).messages({
      'any.required': constant.PASSWORD_REQUIRED,
      'string.empty': constant.PASSWORD_REQUIRED,
      'string.min': constant.PASSWORD_INVALID,
    }),
    accountTypeAdmin: Joi.number().integer().required().messages({
      'any.required': constant.ACCOUNTTYPE_REQUIRED,
    }),
  });

  export const login = Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': constant.EMAIL_REQUIRED,
      'string.empty': constant.EMAIL_REQUIRED,
      'string.email': constant.EMAIL_INVALID,
    }),
    password: Joi.string().required().min(8).messages({
      'any.required': constant.PASSWORD_REQUIRED,
      'string.empty': constant.PASSWORD_REQUIRED,
      'string.base': constant.TYPE_PASSWORD,
    }),
  });


//  export loginRegisterValidation = Joi.object({
//   email: Joi.string().email().required().messages({
//     'string.base': 'Email must be a string',
//     'string.email': 'Email is invalid',
//     'any.required': 'Email is required',
//   }),
//   password: Joi.string().required().min(8).messages({
//     'string.base': 'password must be a string',
//     'any.required': 'password is required',
//     'string.min': 'password must be 8 characters long',
//   }),
// });
}
