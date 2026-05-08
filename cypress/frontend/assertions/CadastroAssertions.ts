class CadastroAssertions {
  shouldDisplaySuccessMessage(message: string): void {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayEmailAlreadyUsedMessage(message: string): void {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredNameMessage(message: string): void {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredEmailMessage(message: string): void {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredPasswordMessage(message: string): void {
    cy.contains(message).should("be.visible");
  }
}

export default new CadastroAssertions();
