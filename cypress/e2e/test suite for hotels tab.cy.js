///<reference types = "Cypress"/>
describe('Test Suite for the Hotels Tab', () => {
    it('navigate to the main page', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('eq','http://localhost:3000/')
    })

    it('verify elements of the tabs', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > :nth-child(1)').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group').should("be.visible")
        cy.get('#tab1 > form > :nth-child(3)').should("be.visible")
        cy.get('[class="checkbox-container m-r-45"]').should("be.visible")
        cy.get('[class="checkmark"]').should("be.visible")
        cy.get('[type="submit"]').should("be.visible")
      })

      it('verify text of tabs', () => {
        cy.visit('http://localhost:3000')
        cy.contains('search').should("be.visible")
        cy.get(':nth-child(3) > .label').should("be.visible")
        cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("be.visible")
        cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
        cy.get('.checkbox-row > .m-r-45').should("be.visible")
      })
  
  })