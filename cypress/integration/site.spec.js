import TestData from '../test-data/TestData';
import {Site} from '../page-object/Site';
import {SignUp} from '../page-object/SignUp';
import {SignIn} from '../page-object/SignIn';

const data = TestData;
const site = new Site();
const signUp = new SignUp();
const signIn = new SignIn();

describe('Contains elements on pages at site', () => {

  before('Site opens', () => {
    site.visit();
    site.welcome().should('be.visible').should('contain', data.namePage.welcome);
    site.openSite().should('be.visible').should('contain', data.link.openSite).click();
  })

  beforeEach('Contains logo, menu, search and horizontal menu', () => {
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

  it('Check color for elements at Catalog page', () => {
    /*site.sidebarFish().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.fish);
    site.sidebarDogs().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.dogs);
    site.sidebarCats().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.cats);
    site.sidebarReptiles().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.reptiles);
    site.sidebarBirds().should('be.visible');
    site.sidebarOthers().should('be.visible').should('contain', data.sidebar.birds);
    site.pictureMenu().should('be.visible');*/
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

})