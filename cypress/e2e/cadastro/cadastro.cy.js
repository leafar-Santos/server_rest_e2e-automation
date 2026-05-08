import CadastroActions from "../../actions/CadastroActions";
import CadastroAssertions from "../../assertions/CadastroAssertions";
import { createUserPayload } from "../../utils/userFactory";

describe("Cadastro de Usuário - Frontend", () => {
  let createdUser;
  let createdUserId = null;

  before(() => {
    cy.fixture("cadastro/cadastroData").then((cadastroData) => {
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
  cy.fixture("cadastro/cadastroData").then((cadastroData) => {
    CadastroActions.register(
      createdUser.nome,
      createdUser.email,
      createdUser.password
    );

    CadastroAssertions.shouldDisplaySuccessMessage(
      cadastroData.messages.success
    );

    cy.getUserByEmail(createdUser.email).then((responseBody) => {
      createdUserId = responseBody.usuarios[0]._id;
    });
  });
});

  it("deve exibir erro ao tentar cadastrar usuário já existente", () => {
    cy.fixture("cadastro/cadastroData").then((cadastroData) => {
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
    cy.fixture("cadastro/cadastroData").then((cadastroData) => {
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