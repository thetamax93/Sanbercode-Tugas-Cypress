describe('Login With Invalid Credential', () => {
    it('Visits KasirAja login page', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should("include", "login")
    })
  })
describe('Input Invalid Credentials', () => {
    it('Input invalid email', () => {
      cy.get("#email").type('akunbiasa@gmail.com')
    })
    it('Input invalid password', () => {
      cy.get("#password").type('biasaja')
    })
  })
 describe('Login', () => {
    it('Click Login Button', () => {
      cy.contains("login").click()
      cy.wait(3000)
    })
    it('Error message shown', () => {
        cy.contains("Kredensial yang Anda berikan salah")
    })
  })