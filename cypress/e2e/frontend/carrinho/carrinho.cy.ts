import HomeActions from "../../../frontend/actions/HomeActions";
import CartActions from "../../../frontend/actions/CartActions";
import CartAssertions from "../../../frontend/assertions/CartAssertions";
import ProductIntercepts from "../../../frontend/intercepts/ProductIntercepts";
import { createUserPayload } from "../../../shared/utils/userFactory";
import type { UserPayload } from "../../../shared/types/userTypes";

interface LoginFixture {
  validUser: Partial<UserPayload> & { emailPrefix?: string };
}

describe("Carrinho - Frontend", () => {
  let user: UserPayload;
  let createdUserId: string | null = null;

  before(() => {
    cy.fixture<LoginFixture>("frontend/login/loginData").then((loginData) => {
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
