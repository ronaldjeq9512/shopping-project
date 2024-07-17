import { LoginRequestParams, LoginRequestResponse, LoginResponse } from '../../types/user';
import { apiClient } from '../apiClient';

export const userData = {
  login: async (
    params: LoginRequestParams,
  ): Promise<LoginResponse | undefined> => {
    const {clave, correo} = params
    const {data} = await apiClient.get<LoginRequestResponse>('/users');
    const user = data.find(user => user.correo === correo && user.clave === clave);
    return user
  },
};
