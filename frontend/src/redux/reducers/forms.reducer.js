import {
  CREATE_FORM,
  ADD_FORM_STEP,
  SET_FORM_DATA,
  RESET_FORM,
} from '../actions';

const initialState = {
  
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case CREATE_FORM:
      return {
        ...state,
        [actions.payload.form]: {
          data: {},
          config: {},
          steps: {},
        },
      };

    case ADD_FORM_STEP:
      return {
        ...state,
        [actions.payload.form]: {
          ...state[actions.payload.form],
          steps: {
            ...state[actions.payload.form].steps,
            [actions.payload.index || state[actions.payload.form].steps.length + 1]: actions.payload.config,
          },
        }
      };

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
