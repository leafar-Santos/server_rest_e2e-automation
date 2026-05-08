import HomeActions from "../../actions/HomeActions";
import CartActions from "../../actions/CartActions";
import CartAssertions from "../../assertions/CartAssertions";
import ProductIntercepts from "../../intercepts/ProductIntercepts";
import { createUserPayload } from "../../utils/userFactory";

describe("Carrinho - Frontend", () => {
  let user;
  let createdUserId = null;

  before(() => {
    cy.fixture("login/loginData").then((loginData) => {
      user = createUserPayload({
        ...loginData.validUser,
        emailPrefix: "qa.cypress.carrinho",
        administrador: "false"
      });

      cy.createUserByApi(user).then((responseBody) => {
        createdUserId = responseBody._id;
      });
    });
  });

  beforeEach(() => {
    ProductIntercepts.interceptGetProducts();

    cy.loginWithSession(user);
    HomeActions.accessHomePage();

    ProductIntercepts.waitGetProductsSuccessfully();
  });

  after(() => {
    if (createdUserId) {
      cy.deleteUserByApi(createdUserId);
    }
  });

  it("deve adicionar um produto ao carrinho, aumentar a quantidade e validar o total", () => {
    HomeActions.addFirstProductToCart();

    CartAssertions.shouldBeOnCartPage();
    CartAssertions.shouldDisplayShoppingList();

    CartActions.increaseFirstProductQuantity(2);

    CartAssertions.shouldDisplayProductQuantity(3);
  });
});