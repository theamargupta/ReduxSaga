import { Load_Sucess } from '../actionTypes';

const imagesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case Load_Sucess:
      return [...state, ...payload];
    default:
      return state;
  }
};
export default imagesReducer;
