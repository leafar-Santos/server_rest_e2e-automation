import LoginPage from "../pages/LoginPage";

class LoginActions {
  accessLoginPage(): void {
    LoginPage.visit();
  }

  fillEmail(email: string): void {
    LoginPage.emailInput().clear().type(email);
  }

  fillPassword(password: string): void {
    LoginPage.passwordInput().clear().type(password, { log: false });
  }

  submitLogin(): void {
    LoginPage.loginButton().click();
  }

  login(email: string, password: string): void {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submitLogin();
  }
}

export default new LoginActions();
