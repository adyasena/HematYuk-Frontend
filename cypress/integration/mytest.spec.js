describe('My Local Web Page Test', () => {
    it('should display expected content', () => {
      cy.visit('http://localhost:3000') // Replace with the URL of your local web page
      cy.contains('Welcome to My Page') // Replace with the expected content on your page
    })
  })
  