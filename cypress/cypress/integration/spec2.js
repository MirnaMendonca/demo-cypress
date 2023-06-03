describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
        // abre o site
        cy.visit('http://localhost:5000/')
    })
    it('Teste 2: Verifica item na página', () => {
        // Verifica se existe o livro desejado
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })    
    it('Teste 3: Calcula Frete', () => {    
        // Calcula o frete
        cy.get('[data-id=3]').within(() => {
           cy.get('input').type('10000-000')
           cy.contains('Calcular Frete').click().then
           cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')

        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })
    it('Teste 4: Compra um livro', () => {
        cy.contains('Comprar').click().then
        cy.wait(2000)
        cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')
        cy.get('.swal-button').click()
    })
  })




//   Tarefa #2: Testando a Compra de um Livro

// Agora é sua vez de incrementar o teste anterior!

// Basicamente, você deve acrescentar código no teste para simular a compra de um livro, conforme explicado a seguir:

//     Use a função cy.contains para selecionar o botão Comprar e para clicar nele (função click)
//     Espere que o pop-up seja exibido com a confirmação da compra (função wait)
//     Verifique se nesse pop-up temos a messagem: Sua compra foi realizada com sucesso
//     Feche o pop-up, clicando em seu botão

