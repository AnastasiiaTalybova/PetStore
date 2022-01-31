export class SignUp {
  visit() {
    cy.visit('/actions/Account.action?newAccountForm=');
  }
}