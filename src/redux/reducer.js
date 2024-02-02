// reducer.js

const initialState = {
  showButtons: false,
  // inne stany...
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTONS':
      console.log('currentState:', state); // Dodano console.log
      return {
        ...state,
        showButtons: !state.showButtons,
      };
    // inne przypadki...
    default:
      return state;
  }
};

export default rootReducer;
