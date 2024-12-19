class LoginPage {
  visit() {
    cy.visit("/"); // Navigate to the login page
  }

  enterUsername(username) {
    cy.get("input[id='email-address']").type(username);
  }

  enterPassword(password) {
    cy.get("input[class*='p-password-input']").type(password);
  }

  clickLoginButton() {
    cy.get("button[type='submit']").click();
  }

  verifyErrorMessage(expectedMessage) {
    cy.contains(expectedMessage).should("be.visible");
  }

  verifyUsernameFieldValidation(expectedMessage) {
    cy.get('.p-error').eq(0)
      .contains(expectedMessage)
      .should("be.visible");
  }

  verifyPasswordFieldValidation(expectedMessage) {
    cy.get('.p-error').eq(1)
      .contains(expectedMessage)
      .should("be.visible");
  }

  clearUsername() {
    cy.get("input[id='email-address']").clear();
  }

  clearPassword() {
    cy.get("input[class*='p-password-input']").clear();
  }
  
  clickForgotPasswordBtn(){
    cy.get('.no-underline').click();
  }
}

export default new LoginPage();
