import { cadastroSelectors } from "../selectors/cadastroSelectors";

class CadastroPage {
  visit(): void {
    cy.visit("/cadastrarusuarios");
  }

  nameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(cadastroSelectors.nameInput);
  }

  emailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(cadastroSelectors.emailInput);
  }

  passwordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(cadastroSelectors.passwordInput);
  }

  registerButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(cadastroSelectors.registerButton);
  }
}

export default new CadastroPage();
