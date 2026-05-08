import { cartSelectors } from "../selectors/cartSelectors";

class CartActions {
  increaseFirstProductQuantity(times = 1) {
    for (let index = 0; index < times; index++) {
      cy.get(cartSelectors.increaseQuantityButton).first().click();
    }
  }
}



export default new CartActions();
