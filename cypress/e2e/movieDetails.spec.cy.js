describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movie/337401', {fixture: 'MulanDetail'})
    cy.wait(2000)
    cy.visit('http://localhost:3000/movies/337401',{timeout: 5000});
  })

    it('Should load a url for the specific movie details', () => {
      cy.url().should('eq', 'http://localhost:3000/movies/337401')
    });

    it('Should contain movie details, including title, duration, and date.', () => {
      cy.get('.title')
        .contains('Mulan')

      cy.get('.date')
        .contains('2020')

      cy.get('.mins')
        .contains('115 minutes')
    });

    it('Should contain movie details, including overview, genres and a tagline.', () => {
      cy.get('.overview')
        .should('contain.text', "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.")

      cy.get('.genres-box')
        .contains('Adventure')
      
      cy.get('.genres-box')
        .contains('Action')

      cy.get('.genres-box')
        .contains('Drama')

      cy.get('.genres-box')
        .contains('Fantasy')

      cy.get('.tag-line')
        .should('not.be.visible')
    });
    
    it('Should be able to play a youtube video from the movie details page', () => {
      cy.get('iframe').click()
        .should('have.attr', 'src')
        .should('include', 'youtube')
    });

    it('Should be able to click on the back button on movie details to return to the home page', () => {
      cy.get('.close-button').click()
        .url().should('include', '/')
    });

    it('Should be able to communicate to the user when there is a 400 error', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
          statusCode: 400,
        })
        .get('.error').contains(`Oops! There's been an error. Try again later.`)
    });

    it('Should be able to communicate to the user when there is a 500 error', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
          statusCode: 500,
        })
        .get('.error').contains(`Oops! There's been an error. Try again later.`)
    });

    it('Should be able to communicate to the user when the youtube video cannot be played', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401/videos', {
          statusCode: 500,
        })
        .get('.error').contains(`Oops! There's been an error. Try again later.`)
    });
});
