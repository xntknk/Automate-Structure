describe('Login Functionality', () => {
    beforeEach(() => {
      cy.visit('/'); // Navigate to the login page
    });
  
    it('should log in with valid credentials', () => {
        cy.fixture('userData').then((userData) => {
            cy.get('#email-address').type(userData.validUser.username);
            cy.get('input[type="password"]').type(userData.validUser.password);
            cy.get('button[type="submit"]').click();
          
  
      // Assert redirection to the dashboard
    //   cy.url().should('include', '/dashboard');
    //   cy.contains('Welcome').should('be.visible');
    });
  
    
  });
  it('should display an error for invalid credentials', () => {
    cy.fixture('userData').then((userData) => {
        cy.get('input[name="username"]').type(userData.invalidUser.username);
        cy.get('input[name="password"]').type(userData.invalidUser.password);
        cy.get('button[type="submit"]').click();
    });

  // Assert error message
//   cy.contains('Invalid username or password').should('be.visible');
});
});