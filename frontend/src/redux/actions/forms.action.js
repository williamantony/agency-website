export const CREATE_FORM = 'CREATE_FORM';
export const ADD_FORM_STEP = 'ADD_FORM_STEP';
export const CHANGE_FORM_STEP = 'CHANGE_FORM_STEP';
export const SET_FORM_DATA = 'SET_FORM_DATA';
export const RESET_FORM = 'RESET_FORM';

export const createForm = (form) => {
  return {
    type: CREATE_FORM,
    payload: {
      form,
    },
  };
};

export const addFormStep = (form, title = null, description = null, index = null) => {
  return {
    type: ADD_FORM_STEP,
    payload: {
      form,
      config: {
        title,
        description,
      },
      index,
    },
  };
};

export const changeFormStep = (form, index = null) => {
  return {
    type: CHANGE_FORM_STEP,
    payload: {
      form,
      index,
    },
  };
};

export const nextFormStep = (form) => {
  return (dispatch, getState) => {
    const { currentStep, isLastStep } = getState().forms[form].steps;
    const nextStep = (!isLastStep) ? (currentStep + 1) : currentStep;
    return dispatch(changeFormStep(form, nextStep));
  };
};

export const previousFormStep = (form) => {
  return (dispatch, getState) => {
    const { currentStep } = getState().forms[form].steps;
    const nextStep = (currentStep > 1) ? (currentStep - 1) : 1;
    return dispatch(changeFormStep(form, nextStep));
  };
};

export const setFormData = (form, formData = {}) => {
  return {
    type: SET_FORM_DATA,
    payload: {
      form,
      formData,
    },
  };
};

export const resetForm = (form) => {
  return {
    type: RESET_FORM,
    payload: {
      form,
    },
  };
};
