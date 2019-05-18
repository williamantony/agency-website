import {
  SET_FORM_DATA,
  RESET_FORM,
} from '../actions';

const initialState = {
  
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        [actions.payload.form]: {
          ...state[actions.payload.form],
          ...actions.payload.formData,
        },
      };
    
    case RESET_FORM:
      return {
        ...state,
        [actions.payload.form]: {},
      };

    default:
      return state;
  };
};
