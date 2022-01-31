export class Site {
  visit() {
    cy.visit('/')
  }
  
  welcome() {
    return cy.get('#Content').find('h2')
  }

  openSite() {
    return cy.get('#Content').find('p a')
  }

  logo() {
    return cy.get('#LogoContent').find('img')
  }

  searchButton() {
    return cy.get('[name="searchProducts"]')
  }

  loginPage() {
    return cy.get('#MenuContent').find('a').eq(1)
  }
}