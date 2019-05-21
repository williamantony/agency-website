import {
  CREATE_FORM,
  SET_FORM_STEPS,
  CHANGE_FORM_STEP,
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
          steps: {
            list: {},
            order: [],
            events: {},
            count: 0,
            currentStep: 1,
            hasMultipleSteps: false,
            isLastStep: false,
          },
        },
      };

    case SET_FORM_STEPS:
      return {
        ...state,
        [actions.payload.form]: {
          ...state[actions.payload.form],
          steps: {
            ...state[actions.payload.form].steps,
            ...actions.payload.steps,
          },
        },
      };
      
    case CHANGE_FORM_STEP:
      return {
        ...state,
        [actions.payload.form]: {
          ...state[actions.payload.form],
          steps: {
            ...state[actions.payload.form].steps,
            currentStep: actions.payload.index,
            isLastStep: actions.payload.index === state[actions.payload.form].steps.count,
          },
        },
      };

    case SET_FORM_DATA:
      return {
        ...state,
        [actions.payload.form]: {
          ...state[actions.payload.form],
          data: {
            ...state[actions.payload.form].data,
            ...actions.payload.formData,
          },
        },
      };
    
    case RESET_FORM:
      return {
        ...state,
        [actions.payload.form]: {
          ...state[actions.payload.form],
          data: {},
        },
      };

    default:
      return state;
  };
};
