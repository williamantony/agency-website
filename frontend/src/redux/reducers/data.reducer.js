import {
  STORE_DATA,
} from '../actions';

const initialState = {
  
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case STORE_DATA:
      return {
        ...state,
        [actions.payload.name]: actions.payload.value,
      };

    default:
      return state;
  };
};
