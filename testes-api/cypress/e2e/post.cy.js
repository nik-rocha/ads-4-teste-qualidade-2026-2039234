describe("Gerenciamento de posts", () => {
    it("Dado que existem posts cadastrados, quando eu consultar /posts, então devem ser retornados 100 posts com os campos obrigatórios", () => {
        cy.request("https://jsonplaceholder.typicode.com/posts").then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.an("array").and.have.lenght(100);
            expect(res.body[0]).to.have.all.keys("userId", "id", "title", "body")
        })
    })
})