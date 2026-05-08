import type { UserFactoryOptions, UserPayload } from "../types/userTypes";

export function createUserPayload({
  nome = "QA Cypress",
  emailPrefix = "qa.cypress",
  password = "teste123",
  administrador = "true"
}: UserFactoryOptions = {}): UserPayload {
  const timestamp = Date.now();

  return {
    nome,
    email: `${emailPrefix}.${timestamp}@serverest.com`,
    password,
    administrador
  };
}
