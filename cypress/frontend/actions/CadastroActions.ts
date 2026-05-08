import CadastroPage from "../pages/CadastroPage";

class CadastroActions {
  accessCadastroPage(): void {
    CadastroPage.visit();
  }

  fillName(name: string): void {
    CadastroPage.nameInput().clear().type(name);
  }

  fillEmail(email: string): void {
    CadastroPage.emailInput().clear().type(email);
  }

  fillPassword(password: string): void {
    CadastroPage.passwordInput().clear().type(password, { log: false });
  }

  submitCadastro(): void {
    CadastroPage.registerButton().click();
  }

  register(name: string, email: string, password: string): void {
    this.fillName(name);
    this.fillEmail(email);
    this.fillPassword(password);
    this.submitCadastro();
  }
}

export default new CadastroActions();
