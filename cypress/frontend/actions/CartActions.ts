import { cartSelectors } from "../selectors/cartSelectors";

class CartActions {
  increaseFirstProductQuantity(times = 1): void {
    for (let index = 0; index < times; index += 1) {
      cy.get(cartSelectors.increaseQuantityButton).first().click();
    }
  }
}

export default new CartActions();
