import UserService from "../../api/services/UserService";
import UserApiAssertions from "../../api/assertions/UserApiAssertions";
import { createUserPayload } from "../../shared/utils/userFactory";
import type { UserPayload } from "../../shared/types/userTypes";

interface LoginFixture {
  validUser: Partial<UserPayload> & { emailPrefix?: string };
}

describe("API Usuários - Fluxo completo", () => {
  let user: UserPayload;
  let userId: string | null = null;

  before(() => {
    cy.fixture<LoginFixture>("frontend/login/loginData").then((loginData) => {
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
    UserService.create(user).then((response) => {
      UserApiAssertions.shouldCreateUserSuccessfully(response);

      userId = response.body._id;
      user._id = userId;
    });
  });

  it("deve buscar usuário cadastrado por ID com sucesso", () => {
    expect(userId, "ID do usuário criado").to.be.a("string");

    UserService.findById(userId as string).then((response) => {
      UserApiAssertions.shouldReturnUserByIdSuccessfully(response, user);
    });
  });

  it("deve excluir usuário cadastrado com sucesso", () => {
    expect(userId, "ID do usuário criado").to.be.a("string");

    UserService.deleteById(userId as string).then((response) => {
      UserApiAssertions.shouldDeleteUserSuccessfully(response);
      userId = null;
    });
  });
});
