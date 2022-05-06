/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function() {
        cy.log(Cypress.env("name"));
        cy.navigateTo_WebdriverUni__Checkbox_Page();
    })
    it("Check and validate checkbox", () => {
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        // cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
    })

    it("Uncheck Option 3 and validate it is unchecked", () => {
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    })

    it("Check multiple checkboxes", () => {        
        cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"])
    })
})