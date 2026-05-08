class LoginAssertions {
  shouldBeRedirectedToHome() {
    cy.url().should("not.include", "/login");
    cy.url().should("include", "/home");
  }

  shouldDisplayInvalidCredentialsMessage(message) {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredEmailMessage(message) {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredPasswordMessage(message) {
    cy.contains(message).should("be.visible");
  }
}

export default new LoginAssertions();