class ProductIntercepts {
  interceptGetProducts() {
    cy.intercept("GET", "**/produtos").as("getProducts");
  }

  waitGetProductsSuccessfully() {
    cy.wait("@getProducts").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body).to.have.property("produtos");
      expect(interception.response.body.produtos.length).to.be.greaterThan(0);
    });
  }
}

export default new ProductIntercepts();