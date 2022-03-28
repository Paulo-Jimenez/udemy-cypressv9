/// <reference types="Cypress" />

describe("Iterate over elements", () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='=product/category&path=']").contains("Hair Care").click()
    })
    it("Log information of all hair care products", () => {
        
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
            cy.log($list)
        })
    });

    it("Add specific product to basket", () => {

        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    });

    it("Add another specific product to basket", () => {
        cy.selectProduct('Seaweed Conditioner')
    });

    it("Add another specific product to basket", () => {
        cy.selectProduct('Pantene Pro-V Conditioner, Classic Care')
    });

})