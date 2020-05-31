import { pasaletrasConfig } from 'config/www';

import { HTTPRequester } from 'core/infrastructure/HTTPRequester';

export const apiEmail = {
  send: async formData => {
    const response = await HTTPRequester.post({
      url: pasaletrasConfig.baseURL,
      data: formData,
      headers: { 'content-type': 'application/json' }
    });
    return response;
  },

  sendApi: async formData => {
    const response = await HTTPRequester.post({
      url: pasaletrasConfig.api,
      data: formData,
      headers: { 'content-type': 'application/json' }
    });
    return response;
  }
};
