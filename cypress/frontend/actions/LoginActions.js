import LoginPage from "../pages/LoginPage";

class LoginActions {
  accessLoginPage() {
    LoginPage.visit();
  }

  fillEmail(email) {
    LoginPage.emailInput().clear().type(email);
  }

  fillPassword(password) {
    LoginPage.passwordInput().clear().type(password, { log: false });
  }

  submitLogin() {
    LoginPage.loginButton().click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submitLogin();
  }
}

export default new LoginActions();