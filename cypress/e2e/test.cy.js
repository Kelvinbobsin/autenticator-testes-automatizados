
//  Login com Credenciais Válidas

describe('Login - Credenciais Válidas', () => {
  it('Deve permitir login com e-mail e senha corretos', () => {
    cy.visit('/') // Atualizar URL conforme necessário
    cy.get('.mt-4 > .btn-primary').click() // clique no botão "Login"
    cy.get(':nth-child(2) > .form-control').type('kelvin bobsin') //inserir usuário
    cy.get(':nth-child(3) > .form-control').type('123456') // inserir senha
    cy.get('form > .btn').click() // clique no botão "Entrar"

    // Validação: Deve redirecionar para Dashboard
    cy.url().should('include', '/dashboard')
    cy.contains('Bem-vindo').should('be.visible')
  })
})
//  Login com Senha Incorreta

describe('Login - Senha Incorreta', () => {
  it('Deve exibir mensagem de erro ao inserir senha errada', () => {
    cy.visit('/') // URL base
    cy.get('.mt-4 > .btn-primary').click() // clique no botão "Login"
    cy.get(':nth-child(2) > .form-control').type('kelvin bobsin') //inserir usuário
    cy.get(':nth-child(3) > .form-control').type('######') // inserir senha
    cy.get('form > .btn').click() // clique no botão "Entrar"

    // Validação: Mensagem de erro
    cy.contains('Credenciais inválidas').should('be.visible')
  })
})

//  Tentativa de SQL Injection no Campo de Usuário

describe('Login - Teste de SQL Injection', () => {
  it('Não deve permitir SQL Injection no campo de Usuário', () => {
    cy.visit('/') // URL base
    cy.get('.mt-4 > .btn-primary').click() // clique no botão "Login"
    cy.get(':nth-child(2) > .form-control').type("' OR 1=1 --") //inserir usuário
    cy.get(':nth-child(3) > .form-control').type('123456') // inserir senha
    cy.get('form > .btn').click() // clique no botão "Entrar"

    // Validação: O login deve falhar
    cy.contains('Credenciais inválidas').should('be.visible')
  })
})
