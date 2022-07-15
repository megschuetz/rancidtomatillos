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
        .should('contain.text', 'Mulan')

      cy.get('.date')
        .should('contain.text', '2020')

      cy.get('.mins')
        .should('contain.text', '115 minutes')
  });

    it('Should contain movie details, including overview, genres and a tagline.', () => {
      cy.get('.overview')
        .should('contain.text', "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.")

      cy.get('.genres-box')
        .should('contain.text', 'Action')
        .should('contain.text', 'Adventure')
        .should('contain.text', 'Drama')
        .should('contain.text', 'Fantasy')

      cy.get('.tag-line')
        .should('contain.text', '')
  });

    it('Should load a background image based on the movie', () => {
      cy.get('.close-button').click()
        .url().should('include', '/')
  });
  
  it('Should be able to play a youtube video from the movie details page', () => {
    cy.get('iframe').click({force: true})
      .should('have.attr', 'src')
      .should('include', 'youtube')
  });

  it('Should be able to click on the back button on movie details to return to the home page', () => {
    cy.get('.close-button').click()
      .url().should('include', '/')
});
});

// this.state.error ? <h2 className='error'>Oops! There's been an error. Try again later.</h2> :
//           <main className='movie-details' style={backgroundImage}>
//             <Link to='/' className='close-button' onClick={() => this.props.handleClose()}>X</Link>
//             <div className='pop-up-box'>
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={`https://www.youtube.com/embed/${this.state.singleMovieVideo.key}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="Embedded youtube"
//               /> 
//               <section className='details-box'>
//                 <div className='short-details'>
//                   <h2 className='title'>{singleMovieDetails.title}</h2>
//                   <p className='date'>{dayjs(singleMovieDetails.release_date).format('YYYY')}</p>
//                   <p className='mins'>{singleMovieDetails.runtime} minutes </p>
//                 </div> 
//                 <div className='genres-box'>{genresArray()}</div>
//                 <p className='tag-line'>{singleMovieDetails.tagline}</p>
//                 <p className='overview'>{singleMovieDetails.overview}</p>
//               </section>
//             </div>
//           </main>
//         }
//         </div>