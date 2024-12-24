import LoginPage from '../pages/LoginPage';

let login; // Variable to store fixture data

describe('Login Page Tests', () => {
  before(() => {
    // Load user data from a fixture file ONCE before all tests
    cy.fixture(Cypress.env('fixtureFile')).then((loginData) => {
      login = loginData; // Assign fixture data to the login variable
    });
  });

  beforeEach(() => {
    // Visit the login page before each test
    LoginPage.visit();
  });

  it('should log in with valid credentials', () => {
    // Use fixture data for login
    LoginPage.enterUsername(login.validUser.username);
    LoginPage.enterPassword(login.validUser.password);
    LoginPage.clickLoginButton();

    // Wait for the login to process
    cy.wait(5000);

    // Verify successful login
    cy.url().should('not.include', '/login');
  });

  it('should display an error message for invalid credentials', () => {
    // Use fixture data for invalid login
    LoginPage.enterUsername(login.invalidUser.username);
    LoginPage.enterPassword(login.invalidUser.password);
    LoginPage.clickLoginButton();

    // Verify error message
    LoginPage.verifyErrorMessage('Username or password incorrect.');
  });

  it('should require username and password fields', () => {
    // Attempt to log in without entering any credentials
    LoginPage.clickLoginButton();

    // Verify field validation messages
    LoginPage.verifyUsernameFieldValidation('username is required');
    LoginPage.verifyPasswordFieldValidation('password is required');
  });

  it('should redirect to the forgot password page when clicking the link', () => {
    // Click the forgot password button
    LoginPage.clickForgotPasswordBtn();

    // Verify redirection to the forgot password page
    cy.url().should('include', '/reset-password');
  });

  // it('should display an error for an empty username and valid password', () => {
  //   // Attempt to log in with an empty username
  //   LoginPage.clearUsername();
  //   LoginPage.enterPassword(login.validUser.password);
  //   LoginPage.clickLoginButton();

  //   // Verify validation message for username
  //   LoginPage.verifyUsernameFieldValidation('username is required');
  // });

  // it('should display an error for a valid username and empty password', () => {
  //   // Attempt to log in with an empty password
  //   LoginPage.enterUsername(login.validUser.username);
  //   LoginPage.clearPassword();
  //   LoginPage.clickLoginButton();

  //   // Verify validation message for password
  //   LoginPage.verifyPasswordFieldValidation('password is required');
  // });
});
