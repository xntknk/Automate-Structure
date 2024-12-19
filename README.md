# Cypress E2E Testing Framework

This project contains **End-to-End (E2E)** test automation using Cypress for testing web applications.

---

## **Project Structure**


```plaintext
cypress-e2e/
│
├── cypress/                    
│   ├── downloads/              # Folder for downloaded files during tests
│   ├── e2e/                    # Folder for E2E test scripts
│   │   └── login.cy.js         # Test cases for login functionality
│   ├── fixtures/               # Static test data (e.g., user credentials)
│   │   └── userData.json       # Test data for login tests
│   ├── pages/                  
│   │   └── LoginPage.js  
│   ├── screenshots/            # Screenshots taken on test failures
│   ├── support/                
│   │   ├── e2e.js              # Custom commands and hooks for tests
│   │   └── commands.js         # Custom Cypress commands
│   └── videos/                 # Recorded videos of test runs
│
├── node_modules/               # Installed dependencies
├── cypress.config.js           # Cypress configuration file
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Package lockfile for npm
└── README.md                   # Documentation for the project

```


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
   ```bash
    npm install

4. **Add Cypress to your project (if not already installed)**:
   ```bash
    npx cypress install

5. **Open Cypress (interactive mode)**:
   ```bash
    npx cypress open

6. **Run Cypress tests in headless mode**:
   ```bash
    npx cypress run

7. **Run a specific test file**:
    ```bash
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
```
---

## 6. **CI/CD Integration**

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
      - main  # Run tests on pushes to the main branch
  pull_request:
    branches:
      - main  # Run tests for pull requests targeting the main branch

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        env: [dev, staging]  # Environments to test (add more if needed)

    steps:
      # Step 1: Checkout the code
      - name: Checkout repository
        uses: actions/checkout@v3

      # Step 2: Set up Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      # Step 3: Install dependencies
      - name: Install dependencies
        run: npm install

      # Step 4: Verify Cypress installation
      - name: Verify Cypress
        run: npx cypress verify

      # Step 5: Run Cypress tests for each environment
      - name: Run Cypress tests
        env:
          ENV: ${{ matrix.env }}
        run: npx cypress run --env ENV=${{ matrix.env }}

      # Step 6: Upload test results
      - name: Upload Test Results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: cypress-results-${{ matrix.env }}
          path: cypress/screenshots,cypress/videos

```


---

#### 7. **Troubleshooting**

List common issues and how to fix them:


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



