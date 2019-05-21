export const CREATE_FORM = 'CREATE_FORM';
export const SET_FORM_STEPS = 'SET_FORM_STEPS';
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

export const setFormSteps = (form, steps) => {
  return {
    type: SET_FORM_STEPS,
    payload: {
      form,
      steps,
    },
  };
};

export const addFormStep = (form, id, index, events) => {
  return (dispatch, getState) => {
    const { steps } = getState().forms[form];

    index = (typeof index === 'string')
      ? ((index === 'next') ? (steps.currentStep + 1) : (steps.count + 1))
      : index;

    steps.order.splice(index - 1, 0, id);
    steps.order.forEach((step, i) => {
      steps.list[step] = i + 1;
    });

    steps.events[id] = {
      ...steps.events[id],
      ...events,
    };

    steps.count = steps.order.length;
    steps.hasMultipleSteps = steps.count > 1;

    return dispatch(setFormSteps(form, steps));
  };
};

export const removeFormStep = (form, id) => {
  return (dispatch, getState) => {
    const { steps } = getState().forms[form];
    
    steps.list = {};

    steps.order = steps.order.filter(step => step !== id);
    steps.order.forEach((step, index) => {
      steps.list[step] = index + 1;
    });

    steps.count = steps.order.length;
    steps.hasMultipleSteps = steps.count > 1;
    
    return dispatch(setFormSteps(form, steps));
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
