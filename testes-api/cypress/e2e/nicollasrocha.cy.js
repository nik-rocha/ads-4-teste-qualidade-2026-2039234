describe("Fluxo de Lego", () => {
    it.skip("1- Deve procurar um produto existente e abri-lo.", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get('[name="q"]').type("Grey jacket")
        cy.wait(2000)
        cy.get('#search-submit').click()
        cy.wait(2000)
        cy.get('#product-1 > .product').click()
    });

    it.skip("2- Deve procurar um produto inexistente e voltar.", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get('[name="q"]').type("Red jacket")
        cy.wait(2000)
        cy.get('#search-submit').click()
        cy.wait(2000)
        cy.get('#main-menu > :nth-child(1) > a').click()
    });

    it.skip("3- Deve procurar um produto inexistente e voltar.", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get('[name="q"]').type("Red jacket")
        cy.wait(2000)
        cy.get('#search-submit').click()
        cy.wait(2000)
        cy.get('#main-menu > :nth-child(1) > a').click()
    });

    it.skip("4- Deve procurar um produto existente e adicioná-lo ao carrinho.", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get('[name="q"]').type("Striped top")
        cy.wait(2000)
        cy.get('#search-submit').click()
        cy.wait(2000)
        cy.get('#product-1 > .product').click()
        cy.wait(2000)
        cy.get('#add').click()
        cy.wait(2000)
        cy.get('.toggle-drawer').click()
        cy.reload()
        cy.get('.toggle-drawer').click()
    });

    it.skip("5- Deve procurar um produto, adicioná-lo ao carrinho e removê-lo entrando no mesmo.", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get('[name="q"]').type("Striped top")
        cy.wait(2000)
        cy.get('#search-submit').click()
        cy.wait(2000)
        cy.get('#product-1 > .product').click()
        cy.wait(2000)
        cy.get('#add').click()
        cy.wait(2000)
        cy.get('.toggle-drawer').click()
        cy.reload()
        cy.get('.toggle-drawer').click()
        cy.wait(2000)
        cy.get('.actions > input').click()
        cy.wait(2000)
        cy.get('form > :nth-child(1) > .row > .column > a').click()
    });

    it.skip("6 - Deve tentar criar uma conta no sistema (você é um robô)", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get('nav > #customer_register_link').click()
        cy.wait(2000)
        cy.get('[name="customer[first_name]"]').type("Nicollas")
        cy.get('[name="customer[last_name]"]').type("Rocha")
        cy.get('[name="customer[email]"]').type("emaildeteste@gmail.com")
        cy.get('[name="customer[password]"]').type("minhasenha123")
        cy.wait(2000)
        cy.get('.action_bottom > input').click()
    })

    it.skip("7 - Deve tentar criar uma conta com uma senha muito pequena, e voltar", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get('nav > #customer_register_link').click()
        cy.wait(2000)
        cy.get('[name="customer[first_name]"]').type("Nicollas")
        cy.get('[name="customer[last_name]"]').type("Rocha")
        cy.get('[name="customer[email]"]').type("emaildeteste@gmail.com")
        cy.get('[name="customer[password]"]').type("123")
        cy.wait(2000)
        cy.get('.action_bottom > input').click()
        cy.get('#main-menu > :nth-child(1) > a').click()
    })

    it.skip("8 - Deve tentar resetar a senha ao logar", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get('nav > #customer_login_link').click()
        cy.wait(2000)
        cy.get('p > a').click()
        cy.wait(2000)
        cy.get('[name="email"]').type("emaildeteste@gmail.com")
        cy.get('#recover-password > form > .action_bottom > .button').click()
    })

    it.skip("9- Deve ler a descrição do site.", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get(':nth-child(4) > a').click()
    });

    it("10- Deve acessar o instagram da página.", () => {
        cy.visit("https://sauce-demo.myshopify.com/")
        cy.wait(2000)
        cy.get('.instagram').click()
    });
})