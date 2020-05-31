import { apiEmail } from 'core/infrastructure/api/Email/ApiEmail';

const send = async formData => await apiEmail.send(formData);

const sendApi = async formData => await apiEmail.sendApi(formData);

export const ApiEmailRepository = { send, sendApi };
