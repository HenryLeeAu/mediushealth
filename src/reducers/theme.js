export default function themeReducer(state = { theme: 'default' }, action) {
  switch (action.type) {
    case 'UPDATE_THEME':
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
}
