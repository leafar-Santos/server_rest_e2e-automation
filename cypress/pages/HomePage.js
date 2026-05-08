import { homeSelectors } from "../selectors/homeSelectors";

class HomePage {
  visit() {
    cy.visit("/home");
  }

  addToCartButtons() {
    return cy.get(homeSelectors.addToCartButton);
  }

  cartButton() {
    return cy.get(homeSelectors.cartButton);
  }
}

export default new HomePage();