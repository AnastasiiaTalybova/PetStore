import TestDataTheInternet from '../test-data/TestDataTheInternet';
import {TheInternet} from '../page-object/TheInternet';
import loginResponse from '../fixtures/loginResponse';

const data = TestDataTheInternet;
const internet = new TheInternet();
const dataMock = loginResponse;

describe('Work with File', () => {
  it('File Uploader', () => {
    internet.fileUploaderVisit();
    internet.titleUpload().should('be.visible').should('contain', data.titlePage.uploader);
    internet.fileSelect().should('be.visible').attachFile(data.nameFile.upload, {subjectType: 'drag-n-drop'});
    internet.buttonUpload().should('be.visible').should('contain', data.button.upload).click();
    internet.resultUpload().should('contain', data.titleInfo.upload).should('contain', data.nameFile.upload);
  })
})

describe('Work with Slider', () => {
  it('Horizontal Slider', () => {
    internet.horizontalSliderVisit();
    internet.titleUpload().should('be.visible').should('contain', data.titlePage.horizontalSlider);
    internet.horizontalSliderMarker().should('be.visible').invoke('val', '3.5').trigger('change');
    internet.horizontalSliderResult().should('be.visible').should('have.text', '3.5').should('be.visible');
    internet.horizontalSliderMarker().should('be.visible').invoke('val', '1').trigger('change');
    internet.horizontalSliderResult().should('be.visible').should('have.text', '1').should('be.visible');
    internet.horizontalSliderMarker().should('be.visible').invoke('val', '5').trigger('change');
    internet.horizontalSliderResult().should('be.visible').should('have.text', '5').should('be.visible');
  })
})

describe('Work with Elements', () => {
  it('Add 1 Element', () => {
    internet.addRemoveElementsVisit();
    internet.titleAddRemoveElements().should('be.visible').should('contain', data.titlePage.addRemoveElement);
    internet.buttonAddElement().should('be.visible').should('contain', data.button.addElement).click();
    internet.buttonDeleteElement().should('be.visible');
  })

  it('Add 1 Element then Remove 1 Elements', () => {
    internet.addRemoveElementsVisit();
    internet.titleAddRemoveElements().should('be.visible').should('contain', data.titlePage.addRemoveElement);
    internet.buttonAddElement().should('be.visible').should('contain', data.button.addElement).click();
    internet.buttonDeleteElement().should('be.visible').should('contain', data.button.deleteElement).click();
    internet.buttonDeleteElement().should('not.exist');
  })

  it('Add 2 Element', () => {
    internet.addRemoveElementsVisit();
    internet.titleAddRemoveElements().should('be.visible').should('contain', data.titlePage.addRemoveElement);
    internet.buttonAddElement().should('be.visible').should('contain', data.button.addElement).click();
    internet.buttonAddElement().should('be.visible').should('contain', data.button.addElement).click();
    internet.buttonDeleteElement().eq(0).should('be.visible');
    internet.buttonDeleteElement().eq(1).should('be.visible');
  })

  it('Add 2 Element then Remove 1 Elements', () => {
    internet.addRemoveElementsVisit();
    internet.titleAddRemoveElements().should('be.visible').should('contain', data.titlePage.addRemoveElement);
    internet.buttonAddElement().should('be.visible').should('contain', data.button.addElement).click();
    internet.buttonAddElement().should('be.visible').should('contain', data.button.addElement).click();
    internet.buttonDeleteElement().eq(0).should('be.visible');
    internet.buttonDeleteElement().eq(1).should('be.visible');
    internet.buttonDeleteElement().eq(1).should('be.visible').should('contain', data.button.deleteElement).click();
    internet.buttonDeleteElement().eq(0).should('be.visible');
    internet.buttonDeleteElement().eq(1).should('not.exist');
  })

  it('Add 2 Element then Remove 2 Elements', () => {
    internet.addRemoveElementsVisit();
    internet.titleAddRemoveElements().should('be.visible').should('contain', data.titlePage.addRemoveElement);
    internet.buttonAddElement().should('be.visible').should('contain', data.button.addElement).click();
    internet.buttonAddElement().should('be.visible').should('contain', data.button.addElement).click();
    internet.buttonDeleteElement().eq(0).should('be.visible');
    internet.buttonDeleteElement().eq(1).should('be.visible');
    internet.buttonDeleteElement().eq(0).should('be.visible').should('contain', data.button.deleteElement).click();
    internet.buttonDeleteElement().eq(0).should('be.visible').should('contain', data.button.deleteElement).click();
    internet.buttonDeleteElement().should('not.exist');
  })
})

const user = {
  email: 'test@mail.com',
  password: 'Qwerty123!'
}

describe('Work with Conduit (https://demo.realworld.io/)', () => {
  it('User can login like User without registration (mock)', () => {
    internet.conduitLoginVisit();
    cy.mochLoginConduit();
    internet.conduitLoginEmailFild().should('be.visible').type(user.email);
    internet.conduitPasswordEmailFild().should('be.visible').type(user.password);
    internet.conduitLoginButton().should('be.visible').should('contain', data.conduit.buttonLogin)
      .should('have.css', 'color', data.color.white)
      .should('have.css', 'background-color', data.color.green)
      .click();
    internet.conduitCurrentUser().should('be.visible').should('contain', dataMock.user.username);
  })
})