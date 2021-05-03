import { combineReducers } from 'redux';
import weather from './weather';
import alert from './alert';

export default combineReducers({
  weather,
  alert
});
