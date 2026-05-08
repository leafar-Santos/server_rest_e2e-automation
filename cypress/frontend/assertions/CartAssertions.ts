import { cartSelectors } from "../selectors/cartSelectors";

class CartAssertions {
  shouldBeOnCartPage(): void {
    cy.url().should("include", "/minhaListaDeProdutos");
  }

  shouldDisplayShoppingList(): void {
    cy.contains("Lista de Compras").should("be.visible");
  }

  shouldDisplayProductQuantity(expectedQuantity: number): void {
    cy.get(cartSelectors.productQuantity)
      .first()
      .should("contain.text", expectedQuantity);
  }
}

export default new CartAssertions();
