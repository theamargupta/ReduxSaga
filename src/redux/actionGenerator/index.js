import { Load, Load_Fail, Load_Sucess } from '../actionTypes';

export const loadImages = () => ({
  type: Load,
});
export const setImages = (payload) => ({
  type: Load_Sucess,
  payload,
});
export const setError = (payload) => ({
  type: Load_Fail,
  payload,
});
