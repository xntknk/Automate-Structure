import UserPage from "../pages/UserPage";

let login;
let user; // Correct variable name for user data

describe("User CRUD", () => {
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

  beforeEach(() => {
    // Log in before each test
    cy.login(login.validUser.username, login.validUser.password);
  });

  it("Create User", () => {
    UserPage.visit(); // Visit User page
    UserPage.clickCreateBtn(); // Click Create button

    // Check Required Fields
    UserPage.clickSaveBtn(); // Click Save button without entering data
    UserPage.reqFieldCheck(); // Check for required field validations

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
  });

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
    UserPage.toggleSwitch(); // Toggle Enable/Disable
    UserPage.clickSaveBtn(); // Save changes
  });

  it("Delete User", () => {
    UserPage.visit(); // Navigate to User page
    UserPage.clickDelBtn(user.deleteUser.email); // Click Delete button
    UserPage.cancelDel(); // Cancel delete
    cy.wait(2000);
    UserPage.clickDelBtn(user.deleteUser.email); // Click Delete again
    UserPage.confiirmDel(); // Confirm delete
  });
});
