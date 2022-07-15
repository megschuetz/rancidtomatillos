describe('Movies Display Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
    it('Should be able to visit the home page and view a gallery of movies', () => {
        cy.contains('RANCID TOMATILLOS')
          .get('main')
    });

    it('Should be able to click on a movie and be taken to the movie details page', () => {
        cy.get('.preview').contains('Ava').click()
          .url().should('include', '/movies/539885')
    });

    it('Should be able to click on the back button on movie details to return to the home page', () => {
      cy.get('.preview').contains('Ava').click()
        .url().should('include', '/movies/539885')
        .get('.close-button').click()
        .url().should('include', '/')
  });

    it('Should be able to play a youtube video from the movie details page', () => {
      cy.get('.preview').contains('Ava').click()
        .url().should('include', '/movies/539885')
        .get('iframe').click({force: true})
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
  });