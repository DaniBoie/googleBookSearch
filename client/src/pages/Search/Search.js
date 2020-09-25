import Typography from '@material-ui/core/Typography';
import MediaContext from '../../utils/MediaContext'
import React, {useState} from 'react'
import Form from '../../components/Form'
import API from '../../utils/API'

const Home = () => {

  // SETTING up media state and the data.
  const [bookState, setbookState] = useState({
    search: '',
    books: []
  })

  // HANDLING the inputs on the page.
  bookState.handleInputChange = event => {
    setbookState({...bookState, [event.target.name]: event.target.value})
  }

  // HANDLING the search for media
  bookState.handleSearchBook = event => {
    event.preventDefault()
    // CALLS api to get data from Book API
    API.getBook(bookState.search)
    .then((data) => {
      setbookState({...bookState, books: data, search: ''})
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  //STUDY!
  bookState.handleSaveMedia = imdbID => {
    const saveBook = bookState.books.filter(x => x.imdbID === imdbID)[0]
    API.saveBook(saveBook)
    .then(() => {
      const books = bookState.books.filter(x => x.imdbID !== imdbID)
      setbookState({ ...bookState, books})
    })
  }

  return (
    <>
    <hr />
      <Typography variant="h6">
        Movie/TV Search
          </Typography>
        <MediaContext.Provider value={bookState}>
      <Form />
    {
      // bookState.books.length > 0 ? (
      //   bookState.books.map(media => (
      //     <div key={media.title}>
      //       <img src={media.img} alt={media.title}/>
      //       <h3>{media.title}</h3>
      //       <h4>Type: {media.type}</h4>
      //       <h4>Year: {media.year}</h4>
      //       <h5>Book ID: {media.imdbID}</h5>
      //       <button onClick={() => bookState.handleSaveMedia(media.imdbID)}>Save</button>
      //     </div>
      //   ))
      // ) : null

    }
      </MediaContext.Provider>
    </>
  )
}

export default Home