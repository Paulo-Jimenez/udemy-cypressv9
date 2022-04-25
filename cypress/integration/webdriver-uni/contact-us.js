import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni" ,()=>{
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new Homepage_PO();
    const contact_Us_Po = new Contact_Us_PO();


    before(function() {
        cy.fixture('example').then(function(data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function() {
        // cy.visit(Cypress.env("webdriveruni_homepage")+ "/Contact-Us/contactus.html")
        homepage_PO.visitHomepage();
        cy.wait(3000);
        homepage_PO.clickOn_ContactUs_Button();
        // cy.pause();
    })

    it("Should be able to submit a successful submission via contact us form", ()=>{
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        // cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'This is a comment', 'div#contact_reply > h1', 'Thank You for your Message!');
        contact_Us_Po.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'This is a comment', 'div#contact_reply > h1', 'Thank You for your Message!');

    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", ()=>{
        // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", 'This is a comment', 'body', 'Error: Invalid email address');
        contact_Us_Po.contactForm_Submission(data.first_name, data.last_name, " ", 'This is a comment', 'body', 'Error: Invalid email address');
    });
})