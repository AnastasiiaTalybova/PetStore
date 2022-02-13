import TestData from '../test-data/TestData';
import {Site} from '../page-object/Site';
import {SignUp} from '../page-object/SignUp';
import {SignIn} from '../page-object/SignIn';

const data = TestData;
const site = new Site();
const signUp = new SignUp();
const signIn = new SignIn();

describe('Sign In page', () => {

  before('Site opens', () => {
    site.visit();
    site.welcome().should('be.visible').should('contain', data.namePage.welcome);
    site.openSite().should('be.visible').should('contain', data.link.openSite).click();
  })

  beforeEach('Page contains logo, menu, search and horizontal menu', () => {
    site.logo().should('be.visible');
    site.cart().should('be.visible');
    site.loginPage().should('be.visible').should('contain', data.link.loginPage);
    site.help().should('be.visible').should('contain', data.link.help);
    site.searchField().should('be.visible');
    site.searchButton().should('be.visible').should('contain', data.button.search);
    site.horizontalMenuFish().should('be.visible');
    site.horizontalMenuDogs().should('be.visible');
    site.horizontalMenuReptiles().should('be.visible');
    site.horizontalMenuCats().should('be.visible');
    site.horizontalMenuBirds().should('be.visible');
  })

  it('Go to Login page', () => {
    site.loginPage().should('be.visible').should('contain', data.link.loginPage).click();
    signIn.openSignUpPage().should('be.visible').should('contain', data.link.signUpPage);
    signIn.infoText().should('be.visible').should('contain', data.infoText.loginPage);
  })

  it('Contains titles, fields, link and button at Login page', () => {
    signIn.visit();
    //titles, link and button
    signIn.infoText().should('be.visible').should('contain', data.infoText.loginPage);
    signIn.buttonLogin().should('be.visible').should('contain', data.button.login);
    signIn.openSignUpPage().should('be.visible').should('contain', data.link.signUpPage);
    //fields
    signIn.namesField().should('be.visible').should('contain', data.loginForm.username);
    signIn.usernameField().should('be.visible');
    signIn.namesField().should('be.visible').should('contain', data.loginForm.password);
    signIn.passwordField().should('be.visible');
  })

  it('Check color for elements at Login page', () => {
    //button
    signIn.buttonLogin().should('contain', data.button.login).should('have.css', 'color', data.color.white);
    signIn.buttonLogin().should('contain', data.button.login).should('have.css', 'background-color', data.color.green);
    //text
    signIn.infoText().should('contain', data.infoText.loginPage).should('have.css', 'color', data.color.black1);
    signIn.namesField().should('contain', data.loginForm.username).should('have.css', 'color', data.color.black1);
    signIn.usernameField().should('have.css', 'color', data.color.black3);
    signIn.usernameField().should('have.css', 'background-color', data.color.white);
    signIn.namesField().should('contain', data.loginForm.password).should('have.css', 'color', data.color.black1);
    signIn.passwordField().should('have.css', 'color', data.color.black3);
    signIn.passwordField().should('have.css', 'background-color', data.color.white);
  })
})

describe('Sign Up page', () => {

  before('Site opens', () => {
    site.visit();
    site.welcome().should('be.visible').should('contain', data.namePage.welcome);
    site.openSite().should('be.visible').should('contain', data.link.openSite).click();
  })

  beforeEach('Page contains logo, menu, search and horizontal menu', () => {
    site.logo().should('be.visible');
    site.cart().should('be.visible');
    site.loginPage().should('be.visible').should('contain', data.link.loginPage);
    site.help().should('be.visible').should('contain', data.link.help);
    site.searchField().should('be.visible');
    site.searchButton().should('be.visible').should('contain', data.button.search);
    site.horizontalMenuFish().should('be.visible');
    site.horizontalMenuDogs().should('be.visible');
    site.horizontalMenuReptiles().should('be.visible');
    site.horizontalMenuCats().should('be.visible');
    site.horizontalMenuBirds().should('be.visible');
  })

  it('Go to Registration page', () => {
    site.loginPage().should('be.visible').should('contain', data.link.loginPage).click();
    signIn.openSignUpPage().should('be.visible').should('contain', data.link.signUpPage).click();
    signUp.userInfo().should('be.visible').should('contain', data.registrationForm.userInfo);
    signUp.buttonSaveNewAccount().should('be.visible').should('contain', data.button.SaveNewAccount);
  })

  it('Contains titles, fields and button at Registration page', () => {
    signUp.visit();
    //titles and button
    signUp.userInfo().should('be.visible').should('contain', data.registrationForm.userInfo);
    signUp.accountInfo().should('be.visible').should('contain', data.registrationForm.accountInfo);
    signUp.profileInfo().should('be.visible').should('contain', data.registrationForm.profileInfo);
    signUp.buttonSaveNewAccount().should('be.visible').should('contain', data.button.SaveNewAccount);
    //fields for userInfo
    signUp.userID().should('be.visible').should('contain', data.registrationForm.userID);
    signUp.userIdField().should('be.visible');
    signUp.newPassword().should('be.visible').should('contain', data.registrationForm.newPassword);
    signUp.newPasswordField().should('be.visible');
    signUp.repeatPassword().should('be.visible').should('contain', data.registrationForm.repeatPassword);
    signUp.repeatPasswordField().should('be.visible');
    //fields for accountInfo
    signUp.firstName().should('be.visible').should('contain', data.registrationForm.firstName);
    signUp.firstNameField().should('be.visible');
    signUp.lastName().should('be.visible').should('contain', data.registrationForm.lastName);
    signUp.lastNameField().should('be.visible');
    signUp.email().should('be.visible').should('contain', data.registrationForm.email);
    signUp.emailField().should('be.visible');
    signUp.phone().should('be.visible').should('contain', data.registrationForm.phone);
    signUp.phoneField().should('be.visible');
    signUp.address1().should('be.visible').should('contain', data.registrationForm.address1);
    signUp.address1Field().should('be.visible');
    signUp.address2().should('be.visible').should('contain', data.registrationForm.address2);
    signUp.address2Field().should('be.visible');
    signUp.city().should('be.visible').should('contain', data.registrationForm.city);
    signUp.cityField().should('be.visible');
    signUp.state().should('be.visible').should('contain', data.registrationForm.state);
    signUp.stateField().should('be.visible');
    signUp.zip().should('be.visible').should('contain', data.registrationForm.zip);
    signUp.zipField().should('be.visible');
    signUp.country().should('be.visible').should('contain', data.registrationForm.country);
    signUp.countryField().should('be.visible');
    //fields for profileInfo
    signUp.language().should('be.visible').should('contain', data.registrationForm.language);
    signUp.languageSelect().should('be.visible');
    signUp.favouriteCategory().should('be.visible').should('contain', data.registrationForm.favouriteCategory);
    signUp.favouriteCategorySelect().should('be.visible');
    signUp.myList().should('be.visible').should('contain', data.registrationForm.myList);
    signUp.myListCheckbox().should('be.visible').should('not.be.checked');
    signUp.myBanner().should('be.visible').should('contain', data.registrationForm.myBanner);
    signUp.myBannerCheckbox().should('be.visible').should('not.be.checked');
  })

  it('Checking drop-down list and checkbox at Registration page', () => {
    signUp.visit();
    //language
    signUp.englishLanguageSelect().should('exist').should('contain', data.languageSelect.english);
    signUp.japaneseLanguageSelect().should('exist').should('contain', data.languageSelect.japanese);
    //favouriteCategory
    signUp.fishCategorySelect().should('exist').should('contain', data.categorySelect.fish);
    signUp.dogsCategorySelect().should('exist').should('contain', data.categorySelect.dogs);
    signUp.reptilesCategorySelect().should('exist').should('contain', data.categorySelect.reptiles);
    signUp.catsCategorySelect().should('exist').should('contain', data.categorySelect.cats);
    signUp.birdsCategorySelect().should('exist').should('contain', data.categorySelect.birds);
    //checkbox
    signUp.myListCheckbox().should('be.visible').check().should('be.checked');
    signUp.myBannerCheckbox().should('be.visible').check().should('be.checked');
  })

  it('Checking select from drop-down list at Registration page', () => {
    signUp.visit();
    //languageSelect
    signUp.languageSelect().select(data.languageSelect.english).should('have.value', data.languageSelectValue.english);
    signUp.languageSelect().select(data.languageSelect.japanese).should('have.value', data.languageSelectValue.japanese);
    //favouriteCategorySelect
    signUp.favouriteCategorySelect().select(data.categorySelect.fish).should('have.value', data.categorySelectValue.fish);
    signUp.favouriteCategorySelect().select(data.categorySelect.dogs).should('have.value', data.categorySelectValue.dogs);
    signUp.favouriteCategorySelect().select(data.categorySelect.reptiles).should('have.value', data.categorySelectValue.reptiles);
    signUp.favouriteCategorySelect().select(data.categorySelect.cats).should('have.value', data.categorySelectValue.cats);
    signUp.favouriteCategorySelect().select(data.categorySelect.birds).should('have.value', data.categorySelectValue.birds);
  })

  it('Check color for elements at Registration page', () => {
    //titles and button
    signUp.userInfo().should('contain', data.registrationForm.userInfo).should('have.css', 'color', data.color.black2);
    signUp.accountInfo().should('contain', data.registrationForm.accountInfo).should('have.css', 'color', data.color.black2);
    signUp.profileInfo().should('contain', data.registrationForm.profileInfo).should('have.css', 'color', data.color.black2);
    signUp.buttonSaveNewAccount().should('contain', data.button.SaveNewAccount).should('have.css', 'color', data.color.white);
    signUp.buttonSaveNewAccount().should('contain', data.button.SaveNewAccount).should('have.css', 'background-color', data.color.green);
    
    //fields for userInfo
    signUp.userID().should('contain', data.registrationForm.userID).should('have.css', 'color', data.color.black1);
    signUp.userID().should('contain', data.registrationForm.userID).should('have.css', 'background-color', data.color.grey1);
    signUp.userIdField().should('have.css', 'color', data.color.black3);
    signUp.userIdField().should('have.css', 'background-color', data.color.white);
    
    signUp.newPassword().should('contain', data.registrationForm.newPassword).should('have.css', 'color', data.color.black1);
    signUp.newPassword().should('contain', data.registrationForm.newPassword).should('have.css', 'background-color', data.color.grey1);
    signUp.newPasswordField().should('have.css', 'color', data.color.black3);
    signUp.newPasswordField().should('have.css', 'background-color', data.color.white);
    
    signUp.repeatPassword().should('contain', data.registrationForm.repeatPassword).should('have.css', 'color', data.color.black1);
    signUp.repeatPassword().should('contain', data.registrationForm.repeatPassword).should('have.css', 'background-color', data.color.grey1);
    signUp.repeatPasswordField().should('have.css', 'color', data.color.black3);
    signUp.repeatPasswordField().should('have.css', 'background-color', data.color.white);
    
    //fields for accountInfo
    signUp.firstName().should('contain', data.registrationForm.firstName).should('have.css', 'color', data.color.black1);
    signUp.firstName().should('contain', data.registrationForm.firstName).should('have.css', 'background-color', data.color.grey1);
    signUp.firstNameField().should('have.css', 'color', data.color.black3);
    signUp.firstNameField().should('have.css', 'background-color', data.color.white);

    signUp.lastName().should('contain', data.registrationForm.lastName).should('have.css', 'color', data.color.black1);
    signUp.lastName().should('contain', data.registrationForm.lastName).should('have.css', 'background-color', data.color.grey1);
    signUp.lastNameField().should('have.css', 'color', data.color.black3);
    signUp.lastNameField().should('have.css', 'background-color', data.color.white);

    signUp.email().should('contain', data.registrationForm.email).should('have.css', 'color', data.color.black1);
    signUp.email().should('contain', data.registrationForm.email).should('have.css', 'background-color', data.color.grey1);
    signUp.emailField().should('have.css', 'color', data.color.black3);
    signUp.emailField().should('have.css', 'background-color', data.color.white);

    signUp.phone().should('contain', data.registrationForm.phone).should('have.css', 'color', data.color.black1);
    signUp.phone().should('contain', data.registrationForm.phone).should('have.css', 'background-color', data.color.grey1);
    signUp.phoneField().should('have.css', 'color', data.color.black3);
    signUp.phoneField().should('have.css', 'background-color', data.color.white);

    signUp.address1().should('contain', data.registrationForm.address1).should('have.css', 'color', data.color.black1);
    signUp.address1().should('contain', data.registrationForm.address1).should('have.css', 'background-color', data.color.grey1);
    signUp.address1Field().should('have.css', 'color', data.color.black3);
    signUp.address1Field().should('have.css', 'background-color', data.color.white);

    signUp.address2().should('contain', data.registrationForm.address2).should('have.css', 'color', data.color.black1);
    signUp.address2().should('contain', data.registrationForm.address2).should('have.css', 'background-color', data.color.grey1);
    signUp.address2Field().should('have.css', 'color', data.color.black3);
    signUp.address2Field().should('have.css', 'background-color', data.color.white);

    signUp.city().should('contain', data.registrationForm.city).should('have.css', 'color', data.color.black1);
    signUp.city().should('contain', data.registrationForm.city).should('have.css', 'background-color', data.color.grey1);
    signUp.cityField().should('have.css', 'color', data.color.black3);
    signUp.cityField().should('have.css', 'background-color', data.color.white);

    signUp.state().should('contain', data.registrationForm.state).should('have.css', 'color', data.color.black1);
    signUp.state().should('contain', data.registrationForm.state).should('have.css', 'background-color', data.color.grey1);
    signUp.stateField().should('have.css', 'color', data.color.black3);
    signUp.stateField().should('have.css', 'background-color', data.color.white);

    signUp.zip().should('contain', data.registrationForm.zip).should('have.css', 'color', data.color.black1);
    signUp.zip().should('contain', data.registrationForm.zip).should('have.css', 'background-color', data.color.grey1);
    signUp.zipField().should('have.css', 'color', data.color.black3);
    signUp.zipField().should('have.css', 'background-color', data.color.white);

    signUp.country().should('contain', data.registrationForm.country).should('have.css', 'color', data.color.black1);
    signUp.country().should('contain', data.registrationForm.country).should('have.css', 'background-color', data.color.grey1);
    signUp.countryField().should('have.css', 'color', data.color.black3);
    signUp.countryField().should('have.css', 'background-color', data.color.white);

    //fields for profileInfo
    signUp.language().should('contain', data.registrationForm.language).should('have.css', 'color', data.color.black1);
    signUp.language().should('contain', data.registrationForm.language).should('have.css', 'background-color', data.color.grey1);
    signUp.languageSelect().should('have.css', 'color', data.color.black3);
    signUp.languageSelect().should('have.css', 'background-color', data.color.white);

    signUp.favouriteCategory().should('contain', data.registrationForm.favouriteCategory).should('have.css', 'color', data.color.black1);
    signUp.favouriteCategory().should('contain', data.registrationForm.favouriteCategory).should('have.css', 'background-color', data.color.grey1);
    signUp.favouriteCategorySelect().should('have.css', 'color', data.color.black3);
    signUp.favouriteCategorySelect().should('have.css', 'background-color', data.color.white);

    signUp.myList().should('contain', data.registrationForm.myList).should('have.css', 'color', data.color.black1);
    signUp.myList().should('contain', data.registrationForm.myList).should('have.css', 'background-color', data.color.grey1);
    signUp.myListCheckbox().should('be.visible').check();
    signUp.myListCheckbox().should('be.checked').should('have.css', 'color', data.color.black3);
    signUp.myListCheckbox().should('be.checked').should('have.css', 'background-color', data.color.black4);

    signUp.myBanner().should('contain', data.registrationForm.myBanner).should('have.css', 'color', data.color.black1);
    signUp.myBanner().should('contain', data.registrationForm.myBanner).should('have.css', 'background-color', data.color.grey1);
    signUp.myBannerCheckbox().should('be.visible').check();
    signUp.myBannerCheckbox().should('be.checked').should('have.css', 'color', data.color.black3);
    signUp.myBannerCheckbox().should('be.checked').should('have.css', 'background-color', data.color.black4);
  })
})

const user = {
  user: 'User' + `${Math.round(Math.random() * 10000)}`,
  password: 'Qwerty123!',
  repeatPassword: 'Qwerty123!',
  firstName: 'FirstName' + `${Math.round(Math.random() * 10000)}`,
  lastName: 'LastName' + `${Math.round(Math.random() * 10000)}`,
  email: 'test@mail.com',
  phone: '+123456789',
  address1: 'Address 1',
  address2: 'Address 2',
  city: 'City',
  state: 'State',
  zip: 'Zip',
  country: 'Country',
}

describe('Register and Login as a New User', () => {

  before('Site opens', () => {
    site.visit();
    site.welcome().should('be.visible').should('contain', data.namePage.welcome);
    site.openSite().should('be.visible').should('contain', data.link.openSite).click();
  })

  beforeEach('Page contains logo, menu, search and horizontal menu', () => {
    cy.checkMainPageElements();
  })

  it('Register as a New User', () => {
    signUp.visit();
    //fields for userInfo
    signUp.userIdField().type(user.user);
    signUp.newPasswordField().type(user.password);
    signUp.repeatPasswordField().type(user.repeatPassword);
    //fields for accountInfo
    signUp.firstNameField().type(user.firstName);
    signUp.lastNameField().type(user.lastName);
    signUp.emailField().type(user.email);
    signUp.phoneField().type(user.phone);
    signUp.address1Field().type(user.address1);
    signUp.address2Field().type(user.address2);
    signUp.cityField().type(user.city);
    signUp.stateField().type(user.state);
    signUp.zipField().type(user.zip);
    signUp.countryField().type(user.country);
    //fields for profileInfo
    signUp.languageSelect().select(data.languageSelect.english).should('have.value', data.languageSelectValue.english);
    signUp.favouriteCategorySelect().select(data.categorySelect.dogs).should('have.value', data.categorySelectValue.dogs);
    signUp.myListCheckbox().should('not.be.checked');
    signUp.myBannerCheckbox().should('not.be.checked');
    //button
    signUp.buttonSaveNewAccount().should('be.visible').should('contain', data.button.SaveNewAccount).click();
  })

  it('Login as a New User', () => {
    signIn.visit();
    //fields
    signIn.usernameField().type('{selectall}').type(user.user);
    signIn.passwordField().type('{selectall}').type(user.password);
    //button
    signIn.buttonLogin().should('be.visible').should('contain', data.button.login).click();
    site.welcomeUser().should('contain', `${data.namePage.welcomeUser}`+`${user.firstName}`)
  })
})