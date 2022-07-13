describe('Movies Display Page', () => {
    it('Should be able to visit the home page and view a gallery of movies', () => {
      cy.visit('http://localhost:3000/')
        .contains('RANCID TOMATILLOS')
        .get('main')
        // .get('grid')
        // .contains('Please Sign In');
    });

    it('Should be able to visit the home page and view a gallery of movies', () => {
      cy.intercept(
        {
          method: 'GET', // Route all GET requests
          url: '/movies/', // that have a URL that matches '/users/*'
        },
        [] // and force the response to be: []
      ).as('getMovies') 
    });
  });