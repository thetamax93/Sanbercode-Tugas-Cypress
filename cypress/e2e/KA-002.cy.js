describe('Login With Valid Credential', () => {
  it('Visits KasirAja login page', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.url().should("include", "login")
  })
})
describe('Input Valid Credentials', () => {
  it('Input valid email', () => {
    cy.get("#email").type('akunspesial001@gmail.com')
  })
  it('Input valid password', () => {
    cy.get("#password").type('spesial01')
  })
})
describe('Login', () => {
  it('Click Login Button', () => {
    cy.contains("login").click()
  })
})
describe('Logout', () => {
  it('Click Logout Button', () => {
    cy.viewport(1280, 720)
    cy.get('#menu-button-14').click()
    cy.wait(3000)
    cy.contains("logout").click({ force: true })
  })
})