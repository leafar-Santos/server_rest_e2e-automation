import UserService from "../../api/services/UserService";
import UserApiAssertions from "../../api/assertions/UserApiAssertions";
import { createUserPayload } from "../../shared/utils/userFactory";

describe("API Usuários - Fluxo completo", () => {

  let user;

  let userId = null;

  before(() => {

    cy.fixture("frontend/login/loginData")
      .then((loginData) => {

        user = createUserPayload({
          ...loginData.validUser,
          emailPrefix: "qa.api.usuario"
        });
      });
  });

  after(() => {

    if (userId) {

      UserService.deleteById(userId);
    }
  });

  it("deve cadastrar usuário com sucesso", () => {

    UserService.create(user)
      .then((response) => {

        UserApiAssertions
          .shouldCreateUserSuccessfully(response);

        userId = response.body._id;

        user._id = userId;
      });
  });

  it("deve buscar usuário cadastrado por ID com sucesso", () => {

    UserService.findById(userId)
      .then((response) => {

        UserApiAssertions
          .shouldReturnUserByIdSuccessfully(
            response,
            user
          );
      });
  });

  it("deve excluir usuário cadastrado com sucesso", () => {

    UserService.deleteById(userId)
      .then((response) => {

        UserApiAssertions
          .shouldDeleteUserSuccessfully(response);

        userId = null;
      });
  });
});