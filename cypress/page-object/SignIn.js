export class SignIn {
  visit() {
    cy.visit('/signin');
  }

  openSignUpPage() {
    return cy.get('#Content div a')
  }

  
}