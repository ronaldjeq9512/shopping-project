import { createContext, Dispatch } from "react";
import { ActionUser, UserState } from "../types/user";

interface UserContextProps {
  state: UserState;
  dispatch: Dispatch<ActionUser>;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);
