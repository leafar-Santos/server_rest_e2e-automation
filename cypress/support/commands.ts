import UserService from "../api/services/UserService";
import LoginActions from "../frontend/actions/LoginActions";
import LoginAssertions from "../frontend/assertions/LoginAssertions";
import type {
  CreateUserResponseBody,
  DeleteUserResponseBody,
  FindUsersResponseBody,
  UserPayload
} from "../shared/types/userTypes";

declare global {
  namespace Cypress {
    interface Chainable {
      createUserByApi(user: UserPayload): Chainable<CreateUserResponseBody>;
      deleteUserByApi(userId: string): Chainable<DeleteUserResponseBody>;
      getUserByEmail(email: string): Chainable<FindUsersResponseBody>;
      loginWithSession(user: UserPayload): Chainable<void>;
    }
  }
}

Cypress.Commands.add("createUserByApi", (user: UserPayload) => {
  return UserService.create(user).then((response) => {
    expect(response.status).to.eq(201);

    return response.body;
  });
});

Cypress.Commands.add("deleteUserByApi", (userId: string) => {
  return UserService.deleteById(userId).then((response) => {
    expect(response.status).to.be.oneOf([200, 204]);

    return response.body;
  });
});

Cypress.Commands.add("getUserByEmail", (email: string) => {
  return UserService.findByEmail(email).then((response) => {
    expect(response.status).to.eq(200);

    return response.body;
  });
});

Cypress.Commands.add("loginWithSession", (user: UserPayload) => {
  cy.session(user.email, () => {
    LoginActions.accessLoginPage();
    LoginActions.login(user.email, user.password);

    LoginAssertions.shouldBeRedirectedToHome();
  });
});

export {};
