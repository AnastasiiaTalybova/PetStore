import TestData from '../test-data/TestData';
import {Site} from '../page-object/Site';
import {SignUp} from '../page-object/SignUp';
import {SignIn} from '../page-object/SignIn';

const data = TestData;
const site = new Site();
const signUp = new SignUp();
const signIn = new SignIn();

/*describe('Contains elements on pages at site', () => {

  before('Site opens', () => {
    site.visit();
    site.welcome().should('be.visible').should('contain', data.namePage.welcome);
    site.openSite().should('be.visible').should('contain', data.link.openSite).click();
  })

  beforeEach('Contains logo, menu, search and horizontal menu', () => {
    cy.checkMainPageElements();
  })

  it('Check color for elements at Catalog page', () => {
    site.cart().should('have.css', 'color', data.color.orange);
    site.loginPage().should('contain', data.link.loginPage).should('have.css', 'color', data.color.orange);
    site.help().should('contain', data.link.help).should('have.css', 'color', data.color.orange);
    site.searchField().should('have.css', 'color', data.color.orange);
    site.searchField().should('have.css', 'background-color', data.color.darkGrey);
    site.searchButton().should('contain', data.button.search).should('have.css', 'color', data.color.orange);
    site.searchButton().should('contain', data.button.search).should('have.css', 'background-color', data.color.darkGrey);
    site.header().should('be.visible').should('have.css', 'background-color', data.color.black4);
    site.footer().should('exist').should('have.css', 'background-color', data.color.black4);
  })

  it('Catalog page contains categories and Picture menu', () => {
    site.sidebarFish().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.fish);
    site.sidebarDogs().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.dogs);
    site.sidebarCats().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.cats);
    site.sidebarReptiles().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.reptiles);
    site.sidebarBirds().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.birds);
    site.pictureMenu().should('be.visible');
  })

})*/