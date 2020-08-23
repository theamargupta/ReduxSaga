import { Load, Load_Fail, Load_Sucess } from '../actionTypes';

const loadingReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case Load:
      return true;
    case Load_Sucess:
      return false;
    case Load_Fail:
      return false;
    default:
      return state;
  }
};
export default loadingReducer;
