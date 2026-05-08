import type {
  CreateUserResponseBody,
  DeleteUserResponseBody,
  FindUsersResponseBody,
  UserPayload
} from "../../shared/types/userTypes";

class UserService {
  create(user: UserPayload): Cypress.Chainable<Cypress.Response<CreateUserResponseBody>> {
    return cy.request<CreateUserResponseBody>({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      failOnStatusCode: false,
      body: user
    });
  }

  findAll(): Cypress.Chainable<Cypress.Response<FindUsersResponseBody>> {
    return cy.request<FindUsersResponseBody>({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      failOnStatusCode: false
    });
  }

  findById(userId: string): Cypress.Chainable<Cypress.Response<UserPayload>> {
    return cy.request<UserPayload>({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
      failOnStatusCode: false
    });
  }

  findByEmail(email: string): Cypress.Chainable<Cypress.Response<FindUsersResponseBody>> {
    return cy.request<FindUsersResponseBody>({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      failOnStatusCode: false,
      qs: { email }
    });
  }

  deleteById(userId: string): Cypress.Chainable<Cypress.Response<DeleteUserResponseBody>> {
    return cy.request<DeleteUserResponseBody>({
      method: "DELETE",
      url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
      failOnStatusCode: false
    });
  }
}

export default new UserService();
