// redux/reducer.js

const initialState = {
  showButtons: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_BUTTONS':
      return {
        ...state,
        showButtons: true,
      };
    default:
      return state;
  }
};

export default reducer;
