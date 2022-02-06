export class SignUp {
  visit() {
    cy.visit('/actions/Account.action?newAccountForm=');
  }

  userInfo() {
    return cy.get('form h3').eq(0)
  }

  accountInfo() {
    return cy.get('form h3').eq(1)
  }

  profileInfo() {
    return cy.get('form h3').eq(2)
  }

  buttonSaveNewAccount() {
    return cy.get('[name="newAccount"]')
  }

  userID() {
    return cy.get('table').eq(0).find('tr').eq(0).find('td').eq(0)
  }

  userID() {
    return cy.get('table').eq(0).find('tr').eq(0).find('td').eq(0)
  }

  userIdField() {
    return cy.get('table').eq(0).find('[name="username"]')
  }

  newPassword() {
    return cy.get('table').eq(0).find('tr').eq(1).find('td').eq(0)
  }

  newPasswordField() {
    return cy.get('table').eq(0).find('[name="password"]')
  }

  repeatPassword() {
    return cy.get('table').eq(0).find('tr').eq(2).find('td').eq(0)
  }

  repeatPasswordField() {
    return cy.get('table').eq(0).find('[name="repeatedPassword"]')
  }

  firstName() {
    return cy.get('table').eq(1).find('tr').eq(0).find('td').eq(0)
  }

  firstNameField() {
    return cy.get('table').eq(1).find('[name="account.firstName"]')
  }

  lastName() {
    return cy.get('table').eq(1).find('tr').eq(1).find('td').eq(0)
  }

  lastNameField() {
    return cy.get('table').eq(1).find('[name="account.lastName"]')
  }

  email() {
    return cy.get('table').eq(1).find('tr').eq(2).find('td').eq(0)
  }

  emailField() {
    return cy.get('table').eq(1).find('[name="account.email"]')
  }

  phone() {
    return cy.get('table').eq(1).find('tr').eq(3).find('td').eq(0)
  }

  phoneField() {
    return cy.get('table').eq(1).find('[name="account.phone"]')
  }

  address1() {
    return cy.get('table').eq(1).find('tr').eq(4).find('td').eq(0)
  }

  address1Field() {
    return cy.get('table').eq(1).find('[name="account.address1"]')
  }

  address2() {
    return cy.get('table').eq(1).find('tr').eq(5).find('td').eq(0)
  }

  address2Field() {
    return cy.get('table').eq(1).find('[name="account.address2"]')
  }

  city() {
    return cy.get('table').eq(1).find('tr').eq(6).find('td').eq(0)
  }

  cityField() {
    return cy.get('table').eq(1).find('[name="account.city"]')
  }

  state() {
    return cy.get('table').eq(1).find('tr').eq(7).find('td').eq(0)
  }

  stateField() {
    return cy.get('table').eq(1).find('[name="account.state"]')
  }

  zip() {
    return cy.get('table').eq(1).find('tr').eq(8).find('td').eq(0)
  }

  zipField() {
    return cy.get('table').eq(1).find('[name="account.zip"]')
  }

  country() {
    return cy.get('table').eq(1).find('tr').eq(9).find('td').eq(0)
  }

  countryField() {
    return cy.get('table').eq(1).find('[name="account.country"]')
  }

  language() {
    return cy.get('table').eq(2).find('tr').eq(0).find('td').eq(0)
  }

  languageSelect() {
    return cy.get('table').eq(2).find('[name="account.languagePreference"]')
  }

  englishLanguageSelect() {
    return cy.get('[name="account.languagePreference"]').find('[value="english"]')
  }

  japaneseLanguageSelect() {
    return cy.get('[name="account.languagePreference"]').find('[value="japanese"]')
  }

  favouriteCategory() {
    return cy.get('table').eq(2).find('tr').eq(1).find('td').eq(0)
  }

  favouriteCategorySelect() {
    return cy.get('table').eq(2).find('[name="account.favouriteCategoryId"]')
  }

  fishCategorySelect() {
    return cy.get('[name="account.favouriteCategoryId"]').find('[value="FISH"]')
  }

  dogsCategorySelect() {
    return cy.get('[name="account.favouriteCategoryId"]').find('[value="DOGS"]')
  }

  reptilesCategorySelect() {
    return cy.get('[name="account.favouriteCategoryId"]').find('[value="REPTILES"]')
  }

  catsCategorySelect() {
    return cy.get('[name="account.favouriteCategoryId"]').find('[value="CATS"]')
  }

  birdsCategorySelect() {
    return cy.get('[name="account.favouriteCategoryId"]').find('[value="BIRDS"]')
  }

  myList() {
    return cy.get('table').eq(2).find('tr').eq(2).find('td').eq(0)
  }

  myListCheckbox() {
    return cy.get('table').eq(2).find('[name="account.listOption"]')
  }

  myBanner() {
    return cy.get('table').eq(2).find('tr').eq(3).find('td').eq(0)
  }

  myBannerCheckbox() {
    return cy.get('table').eq(2).find('[name="account.bannerOption"]')
  }
}