class UserService {
  create(user) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      failOnStatusCode: false,
      body: user
    });
  }

  deleteById(userId) {
    return cy.request({
      method: "DELETE",
      url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
      failOnStatusCode: false
    });
  }

  findByEmail(email) {
    return cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      failOnStatusCode: false,
      qs: {
        email
      }
    });
  }
}

export default new UserService();