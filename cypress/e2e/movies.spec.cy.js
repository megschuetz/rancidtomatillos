describe('Movies Display Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'MovieData'})
    cy.visit('http://localhost:3000')
  })
    it('Should be able to visit the home page and view a gallery of movies', () => {
        cy.contains('RANCID TOMATILLOS')
          .get('main')
    });

    it('Should be able to click on a movie and be taken to the movie details page', () => {
        cy.get('.preview').contains('Mulan').click()
          .url().should('include', '/movies/337401')
    });

    it('Should be able to click on the back button on movie details to return to the home page', () => {
      cy.get('.preview').contains('Mulan').click()
        .url().should('include', '/movies/337401')
        .get('.close-button').click()
        .url().should('include', '/')
  });

    it('Should be able to visit the home page and view a gallery of movies', () => {
      cy.intercept(
        {
          method: 'GET', 
          url: '/movies/', 
        },
        [] 
      ).as('getMovies') 
    });

    it('Should be able to communicate an error when there is a 400 error.', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 400,
        })
        .get('.error').should('contain.text', `Oops! There's been an error. Try again later.`)
    });

    it('Should be able to communicate an error when there is a 500 error.', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 500,
        })
        .get('.error').should('contain.text', `Oops! There's been an error. Try again later.`)
    });
  });