describe("Fluxo da Amazon", () => {
    it.skip("Deve pesquisar por um produto e adiciona-lo no carrinho", () => {
        cy.visit('https://www.amazon.com.br/')
        cy.wait(2000)
        cy.get('#nav-search').type('Iphone 18')
        cy.get('#nav-search-submit-button').click()
        cy.wait(2000)
        cy.get('#a-autoid-3 > .a-button-inner > [name="submit.addToCart"]').click()
        cy.wait(2000)
        cy.get('#ewc-cart-button-loaded-retail > .a-button > .a-button-inner > .a-button-text').click()
        cy.get('#sc-subtotal-amount-buybox > .a-size-medium').contains('11.699,10')
    });

    it("Deve tentar adicionar uma nova conta da Amazon", () => {
        cy.visit("https://www.amazon.com.br/")
        cy.wait(2000)
        cy.get('#nav-link-accountList > .nav-a').click()
        cy.get('[name="email"]').type('testeee123@gmail.com')
        cy.get('.a-button-input').click().wait(2000)
        cy.get('[name="password"]').type('asenha123')
        cy.get('#signInSubmit').click()
        cy.get('#auth-error-message-box > .a-box-inner > .a-alert-content').contains('Sua senha está incorreta')
    })
})