/// <reference types="Cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    it("Check specific radio buttons", () => {
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })
        
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(2).check()
    })

    it("Validate the states of specific radio buttons", () => {
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })
        
        cy.get('#radio-buttons-selected-disabled').find("[value='lettuce']").should('not.be.checked')
        cy.get('#radio-buttons-selected-disabled').find("[value='pumpkin']").should('be.checked')

        cy.get('#radio-buttons-selected-disabled').find("[value='lettuce']").check()
        cy.get('#radio-buttons-selected-disabled').find("[value='lettuce']").should('be.checked')
        cy.get('#radio-buttons-selected-disabled').find("[value='pumpkin']").should('not.be.checked')

        cy.get('#radio-buttons-selected-disabled').find("[value='cabbage']").should('be.disabled')

    })

})