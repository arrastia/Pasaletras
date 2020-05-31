export const SendApi = ({ emailRepository }) => async formData => emailRepository.sendApi(formData);
