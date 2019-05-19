export const CREATE_FORM = 'CREATE_FORM';
export const ADD_FORM_STEP = 'ADD_FORM_STEP';
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
