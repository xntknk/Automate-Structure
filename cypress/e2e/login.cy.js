import LoginPage from '../pages/LoginPage';

describe('Login Page Tests', () => {
  beforeEach(() => {
    LoginPage.visit(); // Visit the login page before each test
  });

  it('should log in with valid credentials', () => {
    cy.fixture(Cypress.env('fixtureFile')).then((userData) => {
      LoginPage.enterUsername(userData.validUser.username);
      LoginPage.enterPassword(userData.validUser.password);
      LoginPage.clickLoginButton();

      // Verify successful login
      cy.url().should('not.include', '/login');
    });
  });

  it('should display an error message for invalid credentials', () => {
    cy.fixture(Cypress.env('fixtureFile')).then((userData) => {
      LoginPage.enterUsername(userData.invalidUser.username);
      LoginPage.enterPassword(userData.invalidUser.password);
      LoginPage.clickLoginButton();

      // Verify error message
      LoginPage.verifyErrorMessage('Username or password incorrect.');
    });
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
   // it('should display an error for an empty username and valid password', () => {
  //   cy.fixture(Cypress.env('fixtureFile')).then((userData) => {
  //     LoginPage.clearUsername();
  //     LoginPage.enterPassword(userData.validUser.password);
  //     LoginPage.clickLoginButton();

  //     // Verify validation message for username
  //     LoginPage.verifyUsernameFieldValidation('username is required');
  //   });
  // });

  // it('should display an error for a valid username and empty password', () => {
  //   cy.fixture(Cypress.env('fixtureFile')).then((userData) => {
  //     LoginPage.enterUsername(userData.validUser.username);
  //     LoginPage.clearPassword();
  //     LoginPage.clickLoginButton();

  //     // Verify validation message for password
  //     LoginPage.verifyPasswordFieldValidation('password is required');
  //   });
  // });
});
