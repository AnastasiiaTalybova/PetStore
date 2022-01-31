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

  cart() {
    return cy.get('[name="img_cart"]')
  }

  help() {
    return cy.get('#MenuContent').find('a').eq(2)
  }

  horizontalMenuFish() {
    return cy.get('#QuickLinks').find('a').find('[src="../images/sm_fish.gif"]')
  }

  horizontalMenuDogs() {
    return cy.get('#QuickLinks').find('a').find('[src="../images/sm_dogs.gif"]')
  }

  horizontalMenuReptiles() {
    return cy.get('#QuickLinks').find('a').find('[src="../images/sm_reptiles.gif"]')
  }

  horizontalMenuCats() {
    return cy.get('#QuickLinks').find('a').find('[src="../images/sm_cats.gif"]')
  }

  horizontalMenuBirds() {
    return cy.get('#QuickLinks').find('a').find('[src="../images/sm_birds.gif"]')
  }
}