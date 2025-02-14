class SearchAndFilter {

    typeKeyword(keyword) {
        cy.get("input[id='Keyword Search']").type(keyword);
    }
    checkSearchResult(keyword) {
        cy.get('.p-datatable-thead th') // Target only <th> elements inside thead
          .filter((_, el) => Cypress.$(el).text().trim() === 'Full Name') // Match exact column
          .invoke('index')
          .then((columnIndex) => {
            // cy.log(`Detected column index: ${columnIndex}`);
      
            cy.get('table tbody tr').each(($row) => {
              cy.wrap($row)
                .find(`td:eq(${columnIndex})`) // Ensure correct column selection
                .should('contain.text', keyword);
            });
          });
      }
    checkNoResult(){
        cy.get('[class="text-center text-sm text-gray-500 mt-3"]').should('be.visible');
      }

    addFilter(filter){
        cy.get('[class="p-dropdown p-component p-inputwrapper p-dropdown-clearable w-full"]').eq(0).click();
        cy.get(".p-dropdown-item-label").each(($el, index, list) => {
            if ($el.text() == filter) {
              cy.wrap($el).click();
            }
          });
      }
    checkFilterResult(keyword){
        cy.get('.p-datatable-thead th') // Target only <th> elements inside thead
          .filter((_, el) => Cypress.$(el).text().trim() === 'Role') // Match exact column
          .invoke('index')
          .then((columnIndex) => {
            // cy.log(`Detected column index: ${columnIndex}`);
      
            cy.get('table tbody tr').each(($row) => {
              cy.wrap($row)
                .find(`td:eq(${columnIndex})`) // Ensure correct column selection
                .should('contain.text', keyword);
            });
          });
    }  

}

export default new SearchAndFilter();