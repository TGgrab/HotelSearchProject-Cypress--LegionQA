///<reference types = "Cypress"/>
describe('The flighttab test will verivy the flights functionality', () => {


   const flights_tab = '[data-cy="Flight"]'
   const origin_placeholder = '[placeholder="City or airport"]'
   
    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.get(flights_tab).click()
    })

    after(() => {
        cy.log('after all')
    })

    afterEach(() => {
        cy.log("after each")
    })



    it('navigate to the flights tab', () => {
        cy.get(origin_placeholder).should("be.visible")
        cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flights_tab).invoke('text').should('eq', 'flight')
    })



})