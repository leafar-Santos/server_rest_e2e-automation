import HomePage from "../pages/HomePage";

class HomeActions {
  accessHomePage(): void {
    HomePage.visit();
  }

  addFirstProductToCart(): void {
    HomePage.addToCartButtons().first().click();
  }

  addProductToCartByIndex(index: number): void {
    HomePage.addToCartButtons().eq(index).click();
  }

  addTwoProductsToCart(): void {
    this.addProductToCartByIndex(0);
    this.addProductToCartByIndex(1);
  }

  accessCart(): void {
    HomePage.cartButton().click();
  }
}

export default new HomeActions();
