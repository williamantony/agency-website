import {
  SET_FORM_DATA,
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

    default:
      return state;
  };
};
