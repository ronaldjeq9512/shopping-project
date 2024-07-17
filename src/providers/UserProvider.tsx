import { useReducer, ReactNode } from "react";
import { UserContext } from "../contexts/UserContext";
import { userReducer, initialState } from "../reducers/userReducer";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};