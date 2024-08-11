import { faker } from '@faker-js/faker'

describe('Registration Flow', () => {
    const password = faker.internet.password();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const telephone = faker.phone.number();

    it('Enter the form details', () => {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        
        // Fill out the form
        cy.get('#input-firstname').type(firstName).should('have.value', firstName);
        cy.get('#input-lastname').type(lastName).should('have.value', lastName);
        cy.get('#input-email').type(email).should('have.value', email);
        cy.get('#input-telephone').type(telephone).should('have.value', telephone);
        cy.get('#input-password').type(password).should('have.value', password);
        cy.get('#input-confirm').type(password).should('have.value', password);
        
        // Interact with radio buttons and checkboxes
        cy.get('input[type="radio"]').eq(1).check().should('be.checked');
        cy.get('input[type="checkbox"]').check().should('be.checked');
        
        // Submit the form
        cy.get('.btn.btn-primary').click();

        // Verify account creation
        cy.contains('Your Account Has Been Created!').should('exist');
    });
});
