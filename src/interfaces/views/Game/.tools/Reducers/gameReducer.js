export const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case 'INITIAL_LOAD':
      return { ...state, ...payload };

    case 'TOGGLE':
      return { ...state, isVisible: { ...state.isVisible, [payload]: !state.isVisible[payload] } };

    default:
      return state;
  }
};
