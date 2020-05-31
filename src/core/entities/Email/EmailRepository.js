import { ApiEmailRepository } from 'core/infrastructure/repository/Email/ApiEmailRepository';

export const EmailRepository = {
  send: () => Promise.reject('[EmailRepository#send] must be implemented'),
  sendApi: () => Promise.reject('[EmailRepository#sendApi] must be implemented')
};

export const emailRepository = Object.assign({}, EmailRepository, ApiEmailRepository);
