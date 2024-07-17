import { LoginRequestParams } from "../../types/user";
import { userData } from "./user.data";

export const userService = {
  login: (params: LoginRequestParams) => userData.login(params),
};
