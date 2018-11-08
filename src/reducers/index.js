import { combineReducers } from 'redux';
import theme from './theme';

const reducers = combineReducers({
  themeReducer: theme,
});

export default reducers;
