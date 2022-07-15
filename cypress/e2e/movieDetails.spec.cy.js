describe('Movies Display Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movie/337401', {fixture: 'MovieDetail'})
    cy.visit('http://localhost:3000')
  })

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

    it('Should be able to play a youtube video from the movie details page', () => {
      cy.get('.preview').contains('Ava').click()
        .url().should('include', '/movies/337401')
        .get('iframe').click({force: true})
        .url().should('include', '/')
  });
});