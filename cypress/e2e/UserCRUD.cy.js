import UserPage from "../pages/UserPage";

let login;
let user; // Correct variable name for user data

beforeEach(() => {
  // Log in before each test
  cy.login(login.validUser.username, login.validUser.password);
});
before(() => {
  // Load login data from a fixture file ONCE before all tests
  cy.fixture(Cypress.env("fixtureFile")).then((loginData) => {
    login = loginData; // Assign login data
  });

  // Load user data from userData.json fixture file
  cy.fixture("userData.json").then((userData) => {
    user = userData; // Assign user data
  });
});

describe("Create User", () => {
 

  it("Create user with a valid information", () => {
    UserPage.visit(); // Visit User page
    UserPage.clickCreateBtn(); // Click Create button
    // Enter Info and Create User
    UserPage.enterFname(user.newUser.firstName); // First name
    UserPage.enterLname(user.newUser.lastName); // Last name
    UserPage.enterMobileNo(user.newUser.mobileNumber); // Mobile number
    UserPage.enterEmail(user.newUser.email); // Email
    UserPage.selectRole(user.newUser.role); // Role
    UserPage.enterDept(user.newUser.department); // Department
    UserPage.enterSubDept(user.newUser.subDepartment); // Sub-department
    UserPage.enterPosition(user.newUser.position); // Position
    // UserPage.toggleSwitch(); // Optional toggle
    UserPage.clickSaveBtn(); // Save
    cy.wait(2000);
    UserPage.checkIfDataCreated(`${user.newUser.firstName} ${user.newUser.lastName}`);

  });
  it('If leave require field warning message should be displayed', () => {
    UserPage.visit();
    UserPage.clickCreateBtn();
    UserPage.clickSaveBtn();
    UserPage.reqFieldCheck();
  });
  it('If enter wrong email format it should have warning message', () => {
    UserPage.visit();
    UserPage.clickCreateBtn();
    UserPage.enterFname(user.newUser.firstName); // First name
    UserPage.enterLname(user.newUser.lastName); // Last name
    UserPage.enterMobileNo(user.newUser.mobileNumber); // Mobile number
    UserPage.enterEmail(user.newUser.invalidEmail); // Email
    UserPage.selectRole(user.newUser.role); // Role
    UserPage.enterDept(user.newUser.department); // Department
    UserPage.enterSubDept(user.newUser.subDepartment); // Sub-department
    UserPage.enterPosition(user.newUser.position); // Position
    // UserPage.toggleSwitch(); // Optional toggle
    UserPage.clickSaveBtn(); // Save
    UserPage.emailFormatWarning();
  });
  it('If email is already used warning messgae should be displayed', () => {
    UserPage.visit(); // Visit User page
    UserPage.clickCreateBtn(); // Click Create button
    // Enter Info and Create User
    UserPage.enterFname(user.newUser.firstName); // First name
    UserPage.enterLname(user.newUser.lastName); // Last name
    UserPage.enterMobileNo(user.newUser.mobileNumber2); // Mobile number
    UserPage.enterEmail(user.newUser.email); // Email
    UserPage.selectRole(user.newUser.role); // Role
    UserPage.enterDept(user.newUser.department); // Department
    UserPage.enterSubDept(user.newUser.subDepartment); // Sub-department
    UserPage.enterPosition(user.newUser.position); // Position
    // UserPage.toggleSwitch(); // Optional toggle
    UserPage.clickSaveBtn(); // Save
    UserPage.emailDupMsg();
  });

  it('If mobile number is already used warning messgae should be displayed', () => {
    UserPage.visit(); // Visit User page
    UserPage.clickCreateBtn(); // Click Create button
    // Enter Info and Create User
    UserPage.enterFname(user.newUser.firstName); // First name
    UserPage.enterLname(user.newUser.lastName); // Last name
    UserPage.enterMobileNo(user.newUser.mobileNumber); // Mobile number
    UserPage.enterEmail(user.newUser.email2); // Email
    UserPage.selectRole(user.newUser.role); // Role
    UserPage.enterDept(user.newUser.department); // Department
    UserPage.enterSubDept(user.newUser.subDepartment); // Sub-department
    UserPage.enterPosition(user.newUser.position); // Position
    // UserPage.toggleSwitch(); // Optional toggle
    UserPage.clickSaveBtn(); // Save
    UserPage.mobileDupMsg();
  });
});
describe('Edit User', () => {
  it("Edit User", () => {
  UserPage.visit(); // Navigate to User page
  UserPage.clickEditBtn(`${user.newUser.firstName} ${user.newUser.lastName}`); // Click Edit button
  UserPage.enterFname(user.editUser.firstName); // Edit First name
  UserPage.enterLname(user.editUser.lastName); // Edit Last name
  UserPage.enterMobileNo(user.editUser.mobileNumber); // Edit Mobile number
  UserPage.editRole(user.editUser.role); // Edit Role
  UserPage.enterDept(user.editUser.department); // Edit Department
  UserPage.enterSubDept(user.editUser.subDepartment); // Edit Sub-department
  UserPage.enterPosition(user.editUser.position); // Edit Position
  // UserPage.toggleSwitch(); // Toggle Enable/Disable
  UserPage.clickSaveBtn(); // Save changes
  cy.wait(2000);
  UserPage.checkIfDataEdited(`${user.editUser.firstName} ${user.editUser.lastName}`);

});
});

describe('Delete User', () => {
  it("Delete User", () => {
    UserPage.visit(); // Navigate to User page
    UserPage.clickDelBtn(user.deleteUser.email); // Click Delete button
    UserPage.cancelDel(); // Cancel delete
    cy.wait(2000);
    UserPage.clickDelBtn(user.deleteUser.email); // Click Delete again
    UserPage.confiirmDel(); // Confirm delete
    cy.wait(3000);
    UserPage.checkIfDataDeleted(`${user.editUser.firstName} ${user.editUser.lastName}`);
  });
});
