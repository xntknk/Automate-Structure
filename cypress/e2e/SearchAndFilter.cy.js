import SearchAndFilter from "../pages/SearchAndFilter";

let login ;
let search ;
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
    cy.fixture("SearchAndFilter.json").then((searchFilter) => {
      search = searchFilter; // Assign user data
    });
  });
describe('Test Search Funcionality', () => {
    it('The search results should be displayed correctly', () => {
        cy.visit("/users"); //visit destination page
        SearchAndFilter.typeKeyword(`${search.searchFilter.keyword}{enter}`);
        cy.wait(2000);
        SearchAndFilter.checkSearchResult(search.searchFilter.keyword);  

    });

    it('If dont have the result the not found text should be displayed', () => {
        cy.visit("/users"); //visit destination page
        SearchAndFilter.typeKeyword(`${search.searchFilter.noResultKeyword}{enter}`);
        SearchAndFilter.checkNoResult();
        
    });
});

describe('Test Filter Funcionality', () => {
    it('The filter results should be displayed correctly', () => {
        cy.visit("/users");
        cy.wait(2000);
        SearchAndFilter.addFilter(search.searchFilter.roleFilter);
        cy.wait(2000);
        SearchAndFilter.checkFilterResult(search.searchFilter.roleFilter);
    });

    // it('If dont have the result the not found text should be displayed', () => {
        
    // });
});

describe('Test Search And Filter Combination', () => {
    it('Search and Apply filter at the same time', () => {   // The number of this case is depend on the number of the filter you have
        cy.visit("/users"); //visit destination page
        SearchAndFilter.typeKeyword(`${search.searchFilter.keyword}{enter}`);
        cy.wait(2000);
        SearchAndFilter.addFilter(search.searchFilter.roleFilter);
        cy.wait(2000);
        SearchAndFilter.checkSearchResult(search.searchFilter.keyword);
        SearchAndFilter.checkFilterResult(search.searchFilter.roleFilter);

    });
});