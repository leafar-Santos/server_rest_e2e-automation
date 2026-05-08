export type AdminFlag = "true" | "false";

export interface UserPayload {
  nome: string;
  email: string;
  password: string;
  administrador: AdminFlag;
  _id?: string;
}

export interface UserFactoryOptions {
  nome?: string;
  emailPrefix?: string;
  password?: string;
  administrador?: AdminFlag;
}

export interface CreateUserResponseBody {
  message: string;
  _id: string;
}

export interface DeleteUserResponseBody {
  message: string;
}

export interface FindUsersResponseBody {
  quantidade: number;
  usuarios: UserPayload[];
}
