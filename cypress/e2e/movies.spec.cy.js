describe('Movies Display Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'MovieData'});
    cy.wait(2000);
    cy.visit('http://localhost:3000', {timeout: 5000});
  })
    it('Should be able to visit the home page and view a gallery of movies', () => {
        cy.contains('RANCID TOMATILLOS')
          .get('main')
    });

    it('Should be able to visit the home page and view a gallery of three movies', () => {
      cy.get('[alt="Money Plane"]')
        .should('be.visible');

      cy.get('[alt="Mulan"]')
        .should('be.visible');

      cy.get('[alt="Rogue"]')
        .should('be.visible');
    });


    it('Should each have a poster', () => {
      cy.get('[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]')
        .should('exist');

      cy.get('[src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"]')
        .should('exist');

      cy.get('[src="https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg"]')
        .should('exist');
    });


    it('Should be able to click on a movie and be taken to the movie details page', () => {
      cy.get('.preview').contains('Mulan').click()
        .url().should('include', '/movies/337401')
    });

    it('Should be able to communicate to the user when there is a 400 error', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 400,
        })
        .get('.error').contains(`Oops! There's been an error. Try again later.`);
    });

    it('Should be able to communicate to the user when there is a 500 error', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 500,
        })
        .get('.error').contains(`Oops! There's been an error. Try again later.`);
    });
  });