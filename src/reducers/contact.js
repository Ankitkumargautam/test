const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contact: action.payload,
      };
    default:
      return state; // Ensure a valid state is returned initially
  }
};

export { contactReducer };
