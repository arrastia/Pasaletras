export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case 'IS_SENDING':
      return { ...state, isSending: payload };

    case 'ON_FILL_FORM':
      return { ...state, [payload.id]: payload.value };

    case 'ON_RESET_FORM':
      return { ...state, name: payload, email: payload, subject: payload, message: payload };

    default:
      return state;
  }
};
