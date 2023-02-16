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
describe('Add user with valid email', () => {
    it('Click Pengguna', () => {
        cy.get('[href="/users"] > .css-ewi1jp').click({force:true})
        cy.viewport(1280, 720)
    })
    it('Click Tambah', () => {
        cy.get('.css-1piskbq').click()
        cy.viewport(1280, 720)
    })
    it('Input name', () => {
        cy.get('#nama').type('John Cena')
    })
    it('Input invalid email', () => {
        cy.get('#email').type('akunspesial0002@gmail.com')
    })
    it('Input password', () => {
        cy.get('#password').type('spesial02')
    })
})
describe('New user added', () => {
    it('Click Simpan button', () => {
        cy.get('.css-l5lnz6').click()
        cy.viewport(1280, 720)
        cy.wait(3000)
        cy.reload()
    })
})
//Logout
describe('Logout', () => {
    it('Click Logout Button', () => {
        cy.viewport(1280, 720)
        cy.get('#menu-button-6').click()
       cy.wait(8000)
       cy.contains("logout").click({ force: true })
    })
})
