//Just to login
describe('Login', () => {
    it('Login process', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should("include", "login")
      cy.get("#email").type('akunspesial001@gmail.com')
      cy.get("#password").type('spesial01')
      cy.contains("login").click()
      cy.viewport(1280, 720)
    })
})
//Actual Script:
describe('Edit Category', () => {
    it('Click Kategori', () => {
        cy.get('[href="/categories"] > .css-ewi1jp').click({force:true})
        cy.viewport(1280, 720)
    })
    it('Edit Kategori', () => {
        cy.get('#menu-button-23').click()
        cy.get('#menu-list-23-menuitem-20').click({force:true})
    })
    it('Input name', () => {
        cy.get('#nama').clear().type('Sabun Batangan')
    })
    it('Input description', () => {
        cy.get('#deskripsi').clear().type('Sabun Batangan untuk mencuci pakaian secara manual/tangan')
    })
    it('Click Simpan button', () => {
        cy.get('.chakra-button').click()
        cy.viewport(1280, 720)
        cy.wait(3000)
     })
   })
//Logout
describe('Logout', () => {
    it('Click Logout Button', () => {
       cy.viewport(1280, 720)
       cy.get('#menu-button-6').click()
       cy.wait(3000)
       cy.contains("logout").click({ force: true })
    })
})

