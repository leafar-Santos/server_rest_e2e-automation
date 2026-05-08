import CadastroPage from "../pages/CadastroPage";

class CadastroActions {
  accessCadastroPage() {
    CadastroPage.visit();
  }

  fillName(name) {
    CadastroPage.nameInput().clear().type(name);
  }

  fillEmail(email) {
    CadastroPage.emailInput().clear().type(email);
  }

  fillPassword(password) {
    CadastroPage.passwordInput().clear().type(password, { log: false });
  }

  submitCadastro() {
    CadastroPage.registerButton().click();
  }

  register(name, email, password) {
    this.fillName(name);
    this.fillEmail(email);
    this.fillPassword(password);
    this.submitCadastro();
  }
}

export default new CadastroActions();