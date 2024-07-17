import { ActionUser, UserState } from "../types/user";

export const initialState: UserState = (() => {
  const savedState = localStorage.getItem('userState');
  return savedState ? JSON.parse(savedState) : {
    user: undefined,
  };
})();

export const userReducer = (state: UserState, action: ActionUser): UserState => {
  switch (action.type) {
    case "ADD_USER":
        state = {...action.user};
      break;
    case "REMOVE_USER":
      state = undefined;
      break;
    default:
      return state;
  }

  localStorage.setItem('userState', JSON.stringify(state));
  return state;
};
