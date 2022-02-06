export class SignIn {
  visit() {
    cy.visit('/actions/Account.action?signonFor');
  }

  openSignUpPage() {
    return cy.get('#Content div#Catalog a')
  }

  infoText() {
    return cy.get('#Content div#Catalog p').eq(0)
  }

  buttonLogin() {
    return cy.get('[name="signon"]')
  }

  namesField() {
    return cy.get('#Content div#Catalog p').eq(1)
  }

  usernameField() {
    return cy.get('[name="username"]')
  }

  passwordField() {
    return cy.get('[name="password"]')
  }
}