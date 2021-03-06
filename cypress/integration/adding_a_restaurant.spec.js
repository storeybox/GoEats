describe("adding a restaurant", () => {
    it("displays the restaurant in the list", () => {
        const name = 'Sushi Place';

        cy.visit("http://localhost:1234");

        cy.get('[data-test="newRestaurantName"]')
            .should('not.exist');

        cy.get('[data-test="addRestaurantButton"]')
            .click();
        
        cy.get('[data-test="newRestaurantName"]')
            .type(name);
        
        cy.get('[data-test="saveNewRestaurantButton"]')
            .click();
        
        cy.get('[data-test="newRestaurantName"]')
            .should('not.exist');
        
        cy.contains(name);
    })
})