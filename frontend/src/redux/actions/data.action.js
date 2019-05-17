export const STORE_DATA = 'STORE_DATA';

export const storeData = (name, value) => {
  return {
    type: STORE_DATA,
    payload: {
      name,
      value,
    },
  };
};
