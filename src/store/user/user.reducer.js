import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        currentUser: payload,
      };
    default:
      return state;
  }
};

/**
 * in default return state because
 * each action called every reducer in redux
 * instead of calling the specific reducer like the case of
 * useReducer + context api situation
 */
