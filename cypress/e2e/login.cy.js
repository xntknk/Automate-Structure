import LoginPage from '../pages/LoginPage';

let data;

describe('Login Page Tests', () => {
  beforeEach(() => {
    LoginPage.visit(); // Visit the login page before each test
  });
  before(() => {
    // Load user data from a fixture file ONCE before all tests
    cy.fixture(Cypress.env('fixtureFile')).then((userData) => {
      data = userData; // Correctly assign to the declared variable
    });
  });

  it('should log in with valid credentials', () => {
    
      LoginPage.enterUsername(data.validUser.username);
      LoginPage.enterPassword(data.validUser.password);
      LoginPage.clickLoginButton();
      cy.wait(5000);
      // Verify successful login
      cy.url().should('not.include', '/login');
    
  });

  it('should display an error message for invalid credentials', () => {
    
      LoginPage.enterUsername(data.invalidUser.username);
      LoginPage.enterPassword(data.invalidUser.password);
      LoginPage.clickLoginButton();

      // Verify error message
      LoginPage.verifyErrorMessage('Username or password incorrect.');
  
  });

  it('should require username and password fields', () => {
    // Try to log in without entering any credentials
    LoginPage.clickLoginButton();

    // Verify field validation messages
    LoginPage.verifyUsernameFieldValidation('username is required');
    LoginPage.verifyPasswordFieldValidation('password is required');
  });

  it('should redirect to the forgot password page when clicking the link', () => {
    LoginPage.clickForgotPasswordBtn()

    // Verify redirection to forgot password page
    cy.url().should('include', '/reset-password');
  });
  //  it('should display an error for an empty username and valid password', () => {
    
  //     LoginPage.clearUsername();
  //     LoginPage.enterPassword(data.validUser.password);
  //     LoginPage.clickLoginButton();

  //     // Verify validation message for username
  //     LoginPage.verifyUsernameFieldValidation('username is required');
  
  // });

  // it('should display an error for a valid username and empty password', () => {
    
  //     LoginPage.enterUsername(data.validUser.username);
  //     LoginPage.clearPassword();
  //     LoginPage.clickLoginButton();

  //     // Verify validation message for password
  //     LoginPage.verifyPasswordFieldValidation('password is required');
    
  // });
});
