/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni" ,()=>{
    before(function() {
        cy.fixture('example').then(function(data) {
            // this.data = data;
            globalThis.data = data;
        })
    })
    it("Should be able to submit a successful submission via contact us form", ()=>{
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com")
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force: true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type('This is a comment')
        // cy.get('[type="submit"]').click()
        // cy.get('div#contact_reply > h1').should('have.text', 'Thank You for your Message!')

        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, 'This is a comment', 'div#contact_reply > h1', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", ()=>{
        // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com")
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force: true})
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('textarea.feedback-input').type('This is a comment')
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')

        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", 'This is a comment', 'body', 'Error: Invalid email address');
    });
})