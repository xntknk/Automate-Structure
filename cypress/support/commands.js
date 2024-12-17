// Example of a custom command for login
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  // Command for API requests
  Cypress.Commands.add('apiRequest', (method, url, body) => {
    cy.request({
      method,
      url,
      body,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  