import CadastroActions from "../../../frontend/actions/CadastroActions";
import CadastroAssertions from "../../../frontend/assertions/CadastroAssertions";
import { createUserPayload } from "../../../shared/utils/userFactory";
import type { UserPayload } from "../../../shared/types/userTypes";

interface CadastroFixture {
  validUser: Partial<UserPayload> & { emailPrefix?: string };
  messages: {
    success: string;
    emailAlreadyUsed: string;
    nameRequired: string;
    emailRequired: string;
    passwordRequired: string;
  };
}

describe("Cadastro de Usuário - Frontend", () => {
  let createdUser: UserPayload;
  let createdUserId: string | null = null;

  before(() => {
    cy.fixture<CadastroFixture>("frontend/cadastro/cadastroData").then((cadastroData) => {
      createdUser = createUserPayload(cadastroData.validUser);
    });
  });

  beforeEach(() => {
    CadastroActions.accessCadastroPage();
  });

  after(() => {
    if (createdUserId) {
      cy.deleteUserByApi(createdUserId);
    }
  });

  it("deve cadastrar usuário com sucesso pelo front", () => {
    cy.fixture<CadastroFixture>("frontend/cadastro/cadastroData").then((cadastroData) => {
      CadastroActions.register(
        createdUser.nome,
        createdUser.email,
        createdUser.password
      );

      CadastroAssertions.shouldDisplaySuccessMessage(
        cadastroData.messages.success
      );

      cy.getUserByEmail(createdUser.email).then((responseBody) => {
        createdUserId = responseBody.usuarios[0]._id ?? null;
      });
    });
  });

  it("deve exibir erro ao tentar cadastrar usuário já existente", () => {
    cy.fixture<CadastroFixture>("frontend/cadastro/cadastroData").then((cadastroData) => {
      CadastroActions.register(
        createdUser.nome,
        createdUser.email,
        createdUser.password
      );

      CadastroAssertions.shouldDisplayEmailAlreadyUsedMessage(
        cadastroData.messages.emailAlreadyUsed
      );
    });
  });

  it("deve validar campos obrigatórios ao tentar cadastrar sem preencher dados", () => {
    cy.fixture<CadastroFixture>("frontend/cadastro/cadastroData").then((cadastroData) => {
      CadastroActions.submitCadastro();

      CadastroAssertions.shouldDisplayRequiredNameMessage(
        cadastroData.messages.nameRequired
      );

      CadastroAssertions.shouldDisplayRequiredEmailMessage(
        cadastroData.messages.emailRequired
      );

      CadastroAssertions.shouldDisplayRequiredPasswordMessage(
        cadastroData.messages.passwordRequired
      );
    });
  });
});
