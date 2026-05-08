import { cartSelectors } from "../selectors/cartSelectors";

class CartActions {
  increaseFirstProductQuantity(times = 1) {
    for (let i = 0; i < times; i++) {
      cy.get(cartSelectors.increaseQuantityButton).first().click();
    }
  }
}

export default new CartActions();