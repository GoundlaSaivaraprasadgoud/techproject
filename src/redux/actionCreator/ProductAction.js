import { ActionType } from "../actionType/ActionType";

export const addToCart = (product) => {
  return { type: ActionType.ADD_TO_CART, payload: product };
};
