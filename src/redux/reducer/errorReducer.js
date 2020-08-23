import { Load_Fail, Load_Sucess } from '../actionTypes';

const errorReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case Load_Fail:
      return payload;
    case Load_Sucess:
      return null;
    default:
      return state;
  }
};
export default errorReducer;
