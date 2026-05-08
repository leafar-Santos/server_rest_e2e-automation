import UserService from "../api/services/UserService";
import LoginActions from "../frontend/actions/LoginActions";
import LoginAssertions from "../frontend/assertions/LoginAssertions";

Cypress.Commands.add("createUserByApi", (user) => {
  return UserService.create(user).then((response) => {
    expect(response.status).to.eq(201);

    return response.body;
  });
});

Cypress.Commands.add("deleteUserByApi", (userId) => {
  return UserService.deleteById(userId).then((response) => {
    expect(response.status).to.be.oneOf([200, 204]);

    return response.body;
  });
});

Cypress.Commands.add("getUserByEmail", (email) => {
  return UserService.findByEmail(email).then((response) => {
    expect(response.status).to.eq(200);

    return response.body;
  });
});

Cypress.Commands.add("loginWithSession", (user) => {
  cy.session(user.email, () => {
    LoginActions.accessLoginPage();
    LoginActions.login(user.email, user.password);

    LoginAssertions.shouldBeRedirectedToHome();
  });
});