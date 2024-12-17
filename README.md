# Cypress E2E Testing Framework

This project contains **End-to-End (E2E)** test automation using Cypress for testing web applications.

---

## **Project Structure**

cypress-e2e/ │ ├── cypress/
│ ├── downloads/ # Folder for downloaded files during tests │ ├── e2e/ # Folder for E2E test scripts │ │ └── login.cy.js # Test cases for login functionality │ ├── fixtures/ # Static test data (e.g., user credentials) │ │ └── userData.json # Test data for login tests │ ├── screenshots/ # Screenshots taken on test failures │ ├── support/
│ │ ├── e2e.js # Custom commands and hooks for tests │ │ └── commands.js # Custom Cypress commands │ └── videos/ # Recorded videos of test runs │ ├── node_modules/ # Installed dependencies ├── cypress.config.js # Cypress configuration file ├── package.json # Project dependencies and scripts ├── package-lock.json # Package lockfile for npm └── README.md # Documentation for the project

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+ recommended)  
  Download: [https://nodejs.org](https://nodejs.org)

- **npm** (comes with Node.js) or **yarn**

- **Cypress**  
  Installed via npm or yarn.


---

## **Setup**

Follow these steps to set up the project:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd cypress-e2e

2. **Install project dependencies**:
    npm install

3. **Add Cypress to your project (if not already installed)**:
    npx cypress install

4. **Open Cypress (interactive mode)**:
    npx cypress open

5. **Run Cypress tests in headless mode**:
    npx cypress run

6. **Run a specific test file**:
    npx cypress run --spec "cypress/e2e/login.cy.js"

---

#### 5. **Sample Test Case**

Provide an example of a test case so others can see how you’ve written tests:

```markdown
## Example Test Case

This example demonstrates the login functionality:

**File**: `cypress/e2e/login.cy.js`

```javascript
describe("Login Functionality", () => {
  beforeEach(() => {
    cy.visit("/"); // Navigate to the login page
  });

  it("should log in with valid credentials", () => {
    cy.fixture("userData").then((userData) => {
      cy.get("input[name='username']").type(userData.validUser.username);
      cy.get("input[name='password']").type(userData.validUser.password);
      cy.get('button[type="submit"]').click();

      // Assert successful login
      cy.url().should('include', '/dashboard');
    });
  });
});

---

#### 6. **CI/CD Integration**

If you have set up CI/CD (e.g., GitHub Actions), include the workflow:

```markdown
## CI/CD Integration

To run Cypress tests automatically on every push to the `main` branch, you can use GitHub Actions.

**File**: `.github/workflows/cypress.yml`

```yaml
name: Cypress Tests

on:
  push:
    branches:
      - main
      - Ex

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Cache Cypress binary
        uses: actions/cache@v3
        with:
          path: ~/.cache/Cypress
          key: ${{ runner.os }}-cypress-${{ hashFiles('**/package-lock.json') }}
      
      - name: Install dependencies
        run: npm install

      - name: Install Cypress binary
        run: npx cypress install

      - name: Run Cypress tests
        run: npx cypress run


---

#### 7. **Troubleshooting**

List common issues and how to fix them:

```markdown
## Troubleshooting

1. **"ReferenceError: require is not defined"**  
   - Ensure `package.json` does not have `"type": "module"`.
   - Otherwise, use ES module syntax (`import` instead of `require`).

2. **Cypress not running**  
   - Run `npm install` to ensure dependencies are installed.

3. **Fixtures not loading correctly**  
   - Check the `fixtures/userData.json` file for correct data format.
   
## References

- [Cypress Documentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [GitHub Actions for CI/CD](https://docs.github.com/en/actions)


