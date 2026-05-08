import { cartSelectors } from "../selectors/cartSelectors";

class CartAssertions {
  shouldBeOnCartPage() {
    cy.url().should("include", "/minhaListaDeProdutos");
  }

  shouldDisplayShoppingList() {
    cy.contains("Lista de Compras").should("be.visible");
  }

  shouldDisplayProductQuantity(expectedQuantity) {
    cy.get(cartSelectors.productQuantity)
      .first()
      .should("contain.text", expectedQuantity);
  }
}

export default new CartAssertions();