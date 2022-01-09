import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const ENVIRONMENT = process.env.NODE_ENV;
export const TYPEORM_HOST = process.env.TYPEORM_HOST;
export const TYPEORM_USERNAME = process.env.TYPEORM_USERNAME;
export const TYPEORM_PASSWORD = process.env.TYPEORM_PASSWORD;
export const TYPEORM_DATABASE = process.env.TYPEORM_DATABASE;
export const TYPEORM_PORT = process.env.TYPEORM_PORT;
export const TYPEORM_LOGGING = process.env.TYPEORM_LOGGING;
export const JWT_SECRET = process.env.JWT_SECRET;
export const PORT = process.env.PORT;
export const SES_AWS_REGION = process.env.SES_AWS_REGION;
export const SES_FROM_EMAIL = process.env.SES_FROM_EMAIL as string;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string;
export const COMMUNITY_BASE_URL = process.env.COMMUNITY_BASE_URL as string;
export const BLOCK_USER_PATH = process.env.BLOCK_USER_PATH as string;
export const ES_HOST = process.env.ES_HOST;
export const MAINTANANCE_MODE = process.env.MAINTANANCE_MODE;
export const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY as string;
export const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER as string;
export const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID as string;
export const ENV_TYPE = process.env.ENV_TYPE as string;
export const INDEX_NAME = `dating_users_${ENV_TYPE}`;
