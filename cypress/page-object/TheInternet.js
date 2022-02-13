export class TheInternet {
  // File Uploader
  fileUploaderVisit() {
    cy.visit('http://the-internet.herokuapp.com/upload')
  }

  titleUpload() {
    return cy.get('h3')
  }
  
  fileSelect() {
    return cy.get('#file-upload')
  }

  buttonUpload() {
    return cy.get('#file-submit')
  }

  resultUpload() {
    return cy.get('div.example')
  }
  
  // Horizontal Slider
  horizontalSliderVisit() {
    cy.visit('http://the-internet.herokuapp.com/horizontal_slider')
  }

  titleHorizontalSlider() {
    return cy.get('h3')
  }

  horizontalSliderMarker() {
    return cy.get('[type="range"]')
  }

  horizontalSliderResult() {
    return cy.get('#range')
  }

  // Add/Remove Elements
  addRemoveElementsVisit() {
    cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')
  }

  titleAddRemoveElements() {
    return cy.get('h3')
  }

  buttonAddElement() {
    return cy.get('[onclick="addElement()"]')
  }

  buttonDeleteElement() {
    return cy.get('[onclick="deleteElement()"]')
  }

  // Conduit
  conduitLoginVisit() {
    cy.visit('https://demo.realworld.io/#/login')
  }

  conduitLoginEmailFild() {
    return cy.get('.form-control.form-control-lg.ng-pristine.ng-untouched.ng-valid.ng-empty.ng-valid-email')
  }

  conduitPasswordEmailFild() {
    return cy.get('.form-control.form-control-lg.ng-pristine.ng-untouched.ng-valid.ng-empty[type="password"]')
  }

  conduitLoginButton() {
    return cy.get('.btn.btn-lg.btn-primary.pull-xs-right.ng-binding')
  }

  conduitLoginButton() {
    return cy.get('.btn.btn-lg.btn-primary.pull-xs-right.ng-binding')
  }

  conduitCurrentUser() {
    return cy.get('.nav-link.ng-binding')
  }
}