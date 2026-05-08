import { loginSelectors } from "../selectors/loginSelectors";

class LoginPage {
  visit() {
    cy.visit("/login");
  }

  emailInput() {
    return cy.get(loginSelectors.emailInput);
  }

  passwordInput() {
    return cy.get(loginSelectors.passwordInput);
  }

  loginButton() {
    return cy.get(loginSelectors.loginButton);
  }
}

export default new LoginPage();