Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Demo QA Text Box Test', () => {
  it('should fill the text box form', () => {

    cy.visit('https://demoqa.com/text-box')

    //  TextBox
    cy.get('#userName').should('be.visible').type('TestUser')     

    cy.get('#userEmail').should('be.visible').type('TestEmail@gmail.com') 

    cy.get('#currentAddress').should('be.visible').type('Av. Caxangá,3841-Iputinga, Recife-PE,50670-902') 

    cy.get('#permanentAddress').should('be.visible').type('Av. Caxangá, 3841 - Iputinga, Recife - PE, 50670-902') 

    cy.get('#submit').click()

    cy.get('#output').should('be.visible')
    
    cy.get('#name').should('contain.text', 'TestUser')

    cy.get('#email').should('contain.text', 'TestEmail@gmail.com')
    
    // check box 
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()

    cy.get('label').click()

    // radio 

    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()

    cy.get(':nth-child(3) > :nth-child(3)').click()
    
    // tables

    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()

    cy.get('#addNewRecordButton').click()

    cy.get('#firstName').should('be.visible').type('Test')

    cy.get('#lastName').should('be.visible').type('User')

    cy.get('#userEmail').should('be.visible').type('TestEmail@gmail.com')

    cy.get('#age').should('be.visible').type('28')

    cy.get('#salary').should('be.visible').type('2000')

    cy.get('#department').should('be.visible').type('Legal')

    cy.get('#submit').click()

    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('be.visible')

    
  })
});
