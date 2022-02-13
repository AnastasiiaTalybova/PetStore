// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

import TestData from '../test-data/TestData';
import {Site} from '../page-object/Site';

const data = TestData;
const site = new Site();

// PetStore
Cypress.Commands.add('checkMainPageElements', () => {
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

//Conduit
Cypress.Commands.add('mochLoginConduit', () => { 
  cy.intercept('POST', 'https://api.realworld.io/api/users/login', {
    fixture: 'loginResponse.json',
  })
})