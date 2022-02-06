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
    return cy.get('#LogoContent').find('[src="../images/logo-topbar.gif"]')
  }

  searchButton() {
    return cy.get('[name="searchProducts"]')
  }

  searchField() {
    return cy.get('[name="keyword"]')
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

  welcomeUser() {
    return cy.get('#WelcomeContent')
  }

  sidebarFish() {
    return cy.get('#SidebarContent').find('a').find('[src="../images/fish_icon.gif"]')
  }

  sidebarDogs() {
    return cy.get('#SidebarContent').find('a').find('[src="../images/dogs_icon.gif"]')
  }

  sidebarReptiles() {
    return cy.get('#SidebarContent').find('a').find('[src="../images/reptiles_icon.gif"]')
  }

  sidebarCats() {
    return cy.get('#SidebarContent').find('a').find('[src="../images/cats_icon.gif"]')
  }

  sidebarBirds() {
    return cy.get('#SidebarContent').find('a').find('[src="../images/birds_icon.gif"]')
  }

  sidebarOthers() {
    return cy.get('#SidebarContent')
  }

  pictureMenu() {
    return cy.get('#MainImageContent').find('[src="../images/splash.gif"]')
  }

  header() {
    return cy.get('#Header')
  }

  footer() {
    return cy.get('#Footer')
  }

}