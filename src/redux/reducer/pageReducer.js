import { Load_Sucess } from '../actionTypes';

const imagesReducer = (state = 1, action) => {
  const { type } = action;
  switch (type) {
    case Load_Sucess:
      return state + 1;
    default:
      return state;
  }
};
export default imagesReducer;
