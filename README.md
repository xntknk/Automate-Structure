# Cypress - End to End testing

[Cypress.io](https://www.cypress.io) is an open source, MIT licensed end-to-end test runner

## Key Folders in a Cypress Project

These folders hold end-to-end tests and supporting files for the Cypress Test Runner.

[Cypress](cypress) This is the main Cypress directory that holds everything related to your tests and configuration.

- [e2e](e2e) (End-to-End) This is where you write your actual test files (often with `.cy.js` extension). These tests interact with your application as a user would, simulating real-world scenarios.
- [fixtures](fixtures) Stores static data files (JSON, CSV, etc.) that your tests can use. This is handy for loading mock data or test input values.
- [support](support) Contains utility functions, custom commands, and code that's shared across multiple test files. The `index.js` file in this folder is loaded automatically before each test.
- [plugins](plugins) (Optional) Provides a way to extend or modify Cypress's internal behavior. You can write plugins in Node.js to customize test runs, add reporters, etc.
- [downloads](downloads) Stores files downloaded during your tests.
- [screenshots](screenshots) Cypress automatically saves screenshots here when tests fail or when you explicitly take them.
- [videos](videos) Cypress records videos of your test runs, which are saved here.


Other Files and Folders

`cypress.config.js`: This is the main configuration file for Cypress. You define project-wide settings here (e.g., base URL, test timeout, viewport size).

`package.json`: Lists your project's dependencies (including Cypress itself) and any scripts you want to run (e.g., cypress open or cypress run).

`node_modules`: This folder is automatically created by npm (or yarn) and contains all the project's installed dependencies.


## System requirements

#### Operating System
Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

- macOS 10.15 and above (Intel or Apple Silicon 64-bit (x64 or arm64))
- Linux Ubuntu 20.04 and above, Fedora 38 and above, and Debian 10 and above (x64 or arm64)
- Windows 10 and above (64-bit only)

#### Node.js
Cypress requires Node.js in order to install. We support the versions listed below:
- Node.js 18.x, 20.x, 22.x and above

[Read more](https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install)


## Installing

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)

Install Cypress for Mac, Linux, or Windows, then [get started](https://on.cypress.io/install).



```bash
cd /your/project/path
```
##### >_npm install
```bash
npm install cypress --save-dev
```
##### >_yarn install
```bash
yarn add cypress --dev
```
##### >_pnpm install
```bash
pnpm add cypress --save-dev
```

##### >_Direct download
If you're not using Node or a package manager (npm, pnpm or Yarn) in your project or you want to try Cypress out quickly, you can always [download Cypress directly from our CDN.](https://download.cypress.io/desktop)



## Opening the App
```bash
cd /your/project/path
```

```bash
##npm
npx cypress open

##Yarn
yarn cypress open

##pnpm
pnpm cypress open
```

## Testing Your App
1. Select `E2E Testing` 
![](https://s3.amazonaws.com/tw-inlineimages/386890/0/0/7e4b3814ca3a2ac66dda8e4a3a36467e.png)
2.  Choose a browser
![](https://s3.amazonaws.com/tw-inlineimages/386890/0/0/7e5000aa972817cf4968dd937bdaf298.png)
3. After opening the app, you should see it displayed in the list of end-to-end specs



