export interface User {
    id: string;
    nombre: string;
    apellido: string;
    correo: string;
    clave: string;
}

export interface LoginRequestParams {
    correo: string;
    clave: string;
}

export type LoginRequestResponse  = User[]

export type LoginResponse = User

export interface userLoginForm {
    email: string;
    password: string;
}


  export type UserState = User | null
  
  export type ActionUser =
    | { type: "ADD_USER"; user: User }
    | { type: "REMOVE_USER" }
