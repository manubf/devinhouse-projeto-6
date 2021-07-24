/// <reference types="cypress" />

describe("Login", () => {
  it("efetuar login", () => {
    //Acessar a página
    cy.visit("/home");

    //Informar login senha
    cy.get("input[name=username]").type("user");
    cy.get("input[name=password]").type("123");

    //Clicar no botão enviar
    cy.get("input[type=submit]").click();

    // Verificar se redirecionou para a /home novamente
    cy.url().should("include", "/home");
  });

  it("efetuar logout", () => {
    //Acessar a página
    cy.visit("/home");

    //Clicar no botão sair
    cy.get("button").contains("SAIR").click();

    // Verificar se redirecionou para a /home novamente
    cy.url().should("include", "/home");
  });
});
