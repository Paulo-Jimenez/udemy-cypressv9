/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })

        //selects an option based on value
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')

        //selects an option based on text
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

        //Interact with the 2nd dropdown menu
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')

    })


})