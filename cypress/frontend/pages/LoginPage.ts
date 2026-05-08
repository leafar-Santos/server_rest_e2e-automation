import { loginSelectors } from "../selectors/loginSelectors";

class LoginPage {
  visit(): void {
    cy.visit("/login");
  }

  emailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(loginSelectors.emailInput);
  }

  passwordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(loginSelectors.passwordInput);
  }

  loginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(loginSelectors.loginButton);
  }
}

export default new LoginPage();
