describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('/');

    cy.get('h1')
      .should('have.text', 'My Counter');
    
    cy.contains('Increment').click();
    cy.get('p')
      .should('have.text', '1');

    cy.contains('Increment').click();
    cy.get('p')
      .should('have.text', '2');

    cy.contains('Decrement').click();
    cy.get('p')
      .should('have.text', '1');
  });
});
