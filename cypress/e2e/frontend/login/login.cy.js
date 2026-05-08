import LoginActions from "../../../frontend/actions/LoginActions";
import LoginAssertions from "../../../frontend/assertions/LoginAssertions";
import { createUserPayload } from "../../../shared/utils/userFactory";

describe("Login - Frontend", () => {
  let user;
  let createdUserId = null;

  before(() => {
    cy.fixture("frontend/login/loginData").then((loginData) => {
      user = createUserPayload({
        ...loginData.validUser,
        emailPrefix: "qa.cypress.login"
      });
    });
  });

  beforeEach(() => {
    createdUserId = null;

    LoginActions.accessLoginPage();
  });

  afterEach(() => {
    if (createdUserId) {
      cy.deleteUserByApi(createdUserId);
    }
  });

  it("deve realizar login com sucesso com usuário criado previamente", () => {
    cy.createUserByApi(user).then((responseBody) => {
      createdUserId = responseBody._id;

      LoginActions.login(user.email, user.password);

      LoginAssertions.shouldBeRedirectedToHome();
    });
  });

  it("deve exibir erro ao tentar login com usuário excluído", () => {
    cy.createUserByApi(user).then((responseBody) => {
      const userId = responseBody._id;

      cy.deleteUserByApi(userId).then(() => {
        createdUserId = null;

        LoginActions.login(user.email, user.password);

        LoginAssertions.shouldDisplayInvalidCredentialsMessage(
          "Email e/ou senha inválidos"
        );
      });
    });
  });

  it("deve validar obrigatoriedade dos campos de login", () => {
    cy.fixture("frontend/login/loginData").then((loginData) => {
      LoginActions.submitLogin();

      LoginAssertions.shouldDisplayRequiredEmailMessage(
        loginData.requiredFields.emailRequiredMessage
      );

      LoginAssertions.shouldDisplayRequiredPasswordMessage(
        loginData.requiredFields.passwordRequiredMessage
      );
    });
  });
});