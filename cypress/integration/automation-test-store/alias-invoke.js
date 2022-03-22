/// <reference types="Cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='=product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it.only("Count number of products in homepage", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('homeProducts')
        cy.get('@homeProducts').should('have.length', 16)

        //My solution uses should have attribute
        cy.get('@homeProducts').find('.productcart').should('have.attr', 'title', 'Add to Cart')

        //course solution
        cy.get('@homeProducts').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

})