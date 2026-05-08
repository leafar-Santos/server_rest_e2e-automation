class CadastroAssertions {
  shouldDisplaySuccessMessage(message) {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayEmailAlreadyUsedMessage(message) {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredNameMessage(message) {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredEmailMessage(message) {
    cy.contains(message).should("be.visible");
  }

  shouldDisplayRequiredPasswordMessage(message) {
    cy.contains(message).should("be.visible");
  }
}

export default new CadastroAssertions();