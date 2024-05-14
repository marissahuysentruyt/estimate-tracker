// https://on.cypress.io/api


describe('Estimate Tracker', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('visits the app root url', () => {
    cy.contains('h1', 'Estimate Tracker')
  });

  it('contains a form with inputs and a submit button', () => {
    cy.get('form').should('exist');
    cy.get('input').should('have.length', 4);
    cy.get('form').children('button')
    cy.get('button').should('be.visible').and('contain.text', 'Save')
  });
})
