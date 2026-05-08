export function createUserPayload({
  nome = "QA Cypress",
  emailPrefix = "qa.cypress",
  password = "teste123",
  administrador = "true"
} = {}) {

  const timestamp = Date.now();

  return {
    nome,
    email: `${emailPrefix}.${timestamp}@serverest.com`,
    password,
    administrador
  };
}