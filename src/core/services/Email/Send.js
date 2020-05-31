export const Send = ({ emailRepository }) => async formData => emailRepository.send(formData);
