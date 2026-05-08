class LoginAssertions {
  shouldBeRedirectedToHome(): void {
    cy.url().should("not.include", "/login");
    cy.url().should("include", "/home");
  }

  shouldDisplayInvalidCredentialsMessage(message: string): void {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredEmailMessage(message: string): void {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredPasswordMessage(message: string): void {
    cy.contains(message).should("be.visible");
  }
}

export default new LoginAssertions();
