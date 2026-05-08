import { homeSelectors } from "../selectors/homeSelectors";

class HomePage {
  visit(): void {
    cy.visit("/home");
  }

  addToCartButtons(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(homeSelectors.addToCartButton);
  }

  cartButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(homeSelectors.cartButton);
  }
}

export default new HomePage();
