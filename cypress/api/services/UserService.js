class UserService {

  create(user) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      failOnStatusCode: false,
      body: user
    });
  }

  findAll() {
    return cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      failOnStatusCode: false
    });
  }

  findById(userId) {
    return cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
      failOnStatusCode: false
    });
  }

  deleteById(userId) {
    return cy.request({
      method: "DELETE",
      url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
      failOnStatusCode: false
    });
  }
}

export default new UserService();