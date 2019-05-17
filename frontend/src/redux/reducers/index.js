import { combineReducers } from 'redux';
import data from './data.reducer';
import forms from './forms.reducer';

export default combineReducers({
  data,
  forms,
});
