/// <reference types="cypress" />

describe("Form novo Processo", () => {
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

  it("Deveria acessar a página Home", () => {
    //Acessar a página
    cy.visit("/home");

    //Validar se tem o texto
    cy.get("h2").should("contain.text", "Cadastrar processo:");

    //  Clicar no ícone de Novo Cadastro
    cy.get("button").contains("Novo").click();

    //Preencher o fomulário
    //Clicar no botão para abrir opção de assunto
    cy.get('[aria-labelledby="mui-component-select-assunto"]').click();

    //  Clicar na opção de escolha assunto
    cy.get('[data-value="6"]').click();

    //Clicar no botão para abrir opção de interessado
    cy.get('[aria-labelledby="mui-component-select-interessado"]').click();

    //  Clicar na opção de escolha interessado
    cy.get('[data-value="4"]').click();

    // Inserir texto descrição
    cy.get("textarea[name=descricao]").type("Descrição teste e2e");

    //Clicar no botão para abrir opção de escolha setor
    cy.get('[aria-labelledby="mui-component-select-sgOrgaoSetor"]').click();

    //  Clicar na opção de escolha setor
    cy.get('[data-value="DEVI"]').click();

    cy.get("button").contains("Salvar").click();

    //Validar exibição da mensagem de sucesso
    cy.get(".MuiAlert-message").contains("Processo cadastrado com sucesso!!");
  });

  //   it("Deveria visualizar comentários", () => {
  //     //Acessar a página
  //     cy.visit("/forums");

  //     //Clicar no ícone de comentários
  //     cy.get('[aria-label="Comentários"]').click();

  //     //Verificar texto ao expandir
  //     cy.get(".MuiCollapse-wrapperInner div:first > h5").should(
  //       "have.text",
  //       "Comentários"
  //     );
  //   });

  //   it("Deveria cadastrar novo fórum", () => {
  //     //Acessar a página
  //     cy.visit("/forums");

  //     //Esperar carregar os componentes
  //     cy.get('[data-testid="loadingContainer"').should("not.exist");

  //     //Clicar no botão de cadastrar
  //     cy.get('[aria-label="Adicionar"]').click();

  //     //Preencher o fomulário
  //     cy.get('[placeholder="Título"]').type("Título do formulário");
  //     cy.get('[placeholder="Detalhes"]').type("Detalhes do formulário");
  //     cy.get("button").contains("Adicionar").click();
  //     cy.get('[placeholder="Tecnologia"]').type("Tecnologia do formulário");

  //     //Clicar no botão cadastrar
  //     cy.get("button[type=submit]").click();

  //     //Validar exibição da mensagem de sucesso
  //     cy.get("#notistack-snackbar").should(
  //       "have.text",
  //       "Adicionado com sucesso!"
  //     );

  //     //Validar se inseriu o elemento na lista
  //     cy.get('[data-testid="gridContainer"]').contains("Título do formulário");
  //   });
});
