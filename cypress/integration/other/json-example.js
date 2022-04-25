/// <reference types="Cypress" />

describe("JSON Object" ,()=>{
    it("Json Object Examples", ()=>{
        const exampleObject = {
            "key": "Tim",
            "key2": "Jones"
        }
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]

        //Challenge array
        const exampleArrayOfObjects = [{"key": "Luke"}, {"subject": "Cypress"}, {"language": "Javascript"}]

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                    
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker"
                }
            ]
        }
        cy.log(exampleObject["key"]); //Tim
        cy.log(exampleObject["key2"]); //Jones
        cy.log(exampleObject.key2); //Jones

        cy.log(exampleArrayOfValues[0]); //Sophie
        cy.log(exampleArrayOfValues[1]); //Rose

        cy.log(users.lastName) //Blogs
        cy.log(users.Students[0].lastName) //Blogs2

        //Challenge logs
        cy.log(exampleArrayOfObjects[0].key)
        cy.log(exampleArrayOfObjects[1].subject)
        cy.log(exampleArrayOfObjects[2].language)




    });
})