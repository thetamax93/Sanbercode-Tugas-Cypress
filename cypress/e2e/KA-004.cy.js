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
describe('Add New Category', () => {
  it('Click Kategori', () => {
      cy.get('[href="/categories"] > .css-ewi1jp').click({force:true})
      cy.viewport(1280, 720)
    })
  it('Create Kategori', () => {
      cy.get('.css-1piskbq').click()
      cy.viewport(1280, 720)
    })
  it('Input name', () => {
      cy.get('#nama').type('Sabun Cuci')
  })
  it('Input description', () => {
      cy.get('#deskripsi').type('Sabun Cuci khusus untuk mesin cuci, bukan cuci dengan manual/tangan')
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
    cy.get('#menu-button-14').click()
    cy.wait(3000)
    cy.contains("logout").click({ force: true })
  })
})