import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import thread from './thread';

export default combineReducers({
  alert,
  auth,
  profile,
  thread,
});
