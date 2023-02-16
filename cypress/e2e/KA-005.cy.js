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
describe('Add user with invalid email', () => {
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
        cy.get('#email').type('bingchilling.com')
    })
    it('Input password', () => {
        cy.get('#password').type('mixue')
    })
})
describe('Error message received', () => {
    it('Click Simpan button', () => {
        cy.get('.css-l5lnz6').click()
        cy.contains('"email" must be a valid email')
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
