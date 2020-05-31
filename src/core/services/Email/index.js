import { emailRepository } from 'core/entities/Email/EmailRepository';

import { Send } from './Send';
import { SendApi } from './SendApi';

export const EmailService = { send: Send({ emailRepository }), sendApi: SendApi({ emailRepository }) };
