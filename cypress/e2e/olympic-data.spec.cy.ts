describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.get('th').first().contains('Athlete');
    cy.get('th').should('have.length', 10);
    cy.get('th').each( value => {
      console.log(value.text())
    });
  })
})
