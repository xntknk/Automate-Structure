describe('API Test - JSONPlaceholder', () => {
    it('GET user by ID should return correct data', () => {
      cy.request('https://jsonplaceholder.typicode.com/users/1').then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('id', 1);
        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('email');
      });
    });
  
    it('POST create new post', () => {
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
          title: 'Hello Cypress',
          body: 'This is from API test',
          userId: 1
        }
      }).then((res) => {
        expect(res.status).to.eq(201); // created
        expect(res.body).to.have.property('id'); // new post ID
        expect(res.body.title).to.eq('Hello Cypress');
      });
    });
  });
  