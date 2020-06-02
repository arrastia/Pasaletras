export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ON_FILL_FORM':
      return { ...state, [payload.id]: payload.value };

    case 'ON_RESET_FORM':
      return { ...state, name: payload, email: payload, subject: payload, message: payload };

    default:
      return state;
  }
};
