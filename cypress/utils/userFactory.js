export function createUserPayload(userData = {}) {
  const timestamp = Date.now();

  return {
    nome: userData.nome || "QA Cypress Front",
    email: `${userData.emailPrefix || "qa.cypress"}.${timestamp}@serverest.com`,
    password: userData.password || "teste123",
    administrador: userData.administrador || "true"
  };
}