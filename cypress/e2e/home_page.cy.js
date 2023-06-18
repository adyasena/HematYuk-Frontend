describe('Landing Page Test', () => {
    it('should display the landing page elements', () => {
      cy.visit('http://localhost:5173') // Replace with the URL of your local landing page
      
      // Add assertions for elements on the landing page
      cy.contains('Welcome to My Web App')
      cy.get('.hero-image').should('be.visible')
      // Add more assertions for other elements on the landing page
    })
  })
  