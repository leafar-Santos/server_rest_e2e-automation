import { cadastroSelectors } from "../selectors/cadastroSelectors";

class CadastroPage {
  visit() {
    cy.visit("/cadastrarusuarios");
  }

  nameInput() {
    return cy.get(cadastroSelectors.nameInput);
  }

  emailInput() {
    return cy.get(cadastroSelectors.emailInput);
  }

  passwordInput() {
    return cy.get(cadastroSelectors.passwordInput);
  }

  registerButton() {
    return cy.get(cadastroSelectors.registerButton);
  }
}

export default new CadastroPage();