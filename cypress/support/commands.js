// Example of a custom command for login
Cypress.Commands.add('login', (username, password) => 
  {
      cy.session([username,password], () =>
      {
          cy.visit('/')
          cy.get('#email-address').type(username)
          cy.get('#password').type(password)
          cy.get('[type="submit"]').click()
          cy.wait(5000)
      })
      
  })
  
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
  