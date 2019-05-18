export const SET_FORM_DATA = 'SET_FORM_DATA';
export const RESET_FORM = 'RESET_FORM';

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
