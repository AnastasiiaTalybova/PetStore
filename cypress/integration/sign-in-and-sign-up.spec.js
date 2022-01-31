import TestData from '../test-data/TestData';
import {Site} from '../page-object/Site';
import {SignUp} from '../page-object/SignUp';
import {SignIn} from '../page-object/SignIn';
// import {RandomData} from '../test-data/RandomData';

const data = TestData;
const site = new Site();
const signUp = new SignUp();
const signIn = new SignIn();
// const randomData = RandomData;

describe('Sign Up', () => {

  before('Site opens', () => {
    site.visit();
    site.welcome().should('be.visible').should('contain', data.namePage.welcome);
    site.openSite().should('be.visible').should('contain', data.link.openSite).click();
    site.logo().should('be.visible');
    site.searchButton().should('be.visible');
  })

  beforeEach('Contains logo, menu and search', () => {
    site.logo().should('be.visible');
    site.searchButton().should('be.visible');
  })

  it('Go to Registration page', () => {
    site.loginPage().should('be.visible').should('contain', data.link.loginPage).click();
    signIn.openSignUpPage().should('be.visible').should('contain', data.link.signUpPage).click();
  })

  it('Contains fields on Registration page', () => {
    signUp.visit();

  })
})