class UserApiAssertions {

  shouldCreateUserSuccessfully(response) {

    expect(response.status).to.eq(201);

    expect(response.body)
      .to.have.property(
        "message",
        "Cadastro realizado com sucesso"
      );

    expect(response.body)
      .to.have.property("_id");

    expect(response.body._id)
      .to.be.a("string");
  }

  shouldReturnUserByIdSuccessfully(response, expectedUser) {

    expect(response.status).to.eq(200);

    expect(response.body)
      .to.have.property("_id", expectedUser._id);

    expect(response.body)
      .to.have.property("nome", expectedUser.nome);

    expect(response.body)
      .to.have.property("email", expectedUser.email);

    expect(response.body)
      .to.have.property("password", expectedUser.password);

    expect(response.body)
      .to.have.property(
        "administrador",
        expectedUser.administrador
      );
  }

  shouldDeleteUserSuccessfully(response) {

    expect(response.status).to.eq(200);

    expect(response.body)
      .to.have.property(
        "message",
        "Registro excluído com sucesso"
      );
  }
}

export default new UserApiAssertions();