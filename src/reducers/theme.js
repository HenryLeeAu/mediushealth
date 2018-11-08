export default function themeReducer(state = { theme: 'default' }, action) {
  switch (action.type) {
    case 'GET_THEME':
      return {
        ...state,
        theme: action.payload.theme,
      };

    default:
      return state;
  }
}
