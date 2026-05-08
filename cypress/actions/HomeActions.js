import HomePage from "../pages/HomePage";

class HomeActions {
  accessHomePage() {
    HomePage.visit();
  }

  addFirstProductToCart() {
    HomePage.addToCartButtons().first().click();
  }

  addProductToCartByIndex(index) {
    HomePage.addToCartButtons().eq(index).click();
  }

  addTwoProductsToCart() {
    this.addProductToCartByIndex(0);
    this.addProductToCartByIndex(1);
  }

  accessCart() {
    HomePage.cartButton().click();
  }
}

export default new HomeActions();