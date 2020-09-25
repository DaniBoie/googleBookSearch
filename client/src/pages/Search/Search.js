import Typography from '@material-ui/core/Typography';
import MediaContext from '../../utils/MediaContext'
import React, {useState} from 'react'
import Form from '../../components/Form'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'
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
    .then(({data}) => {
      setbookState({...bookState, books: data, search: ''})
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  bookState.handleFindBook = event => {
    console.log(bookState.books)
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
      bookState.books.length > 0 ? (
        bookState.books.map(book => (
          <div key={book.title}>
            <img src={book.image} alt={book.title}/>
            <h3>{book.title}</h3>
            <h4>Type: {book.authors}</h4>
            <h4>Year: {book.description}</h4>
            <h5>Book ID: {book.link}</h5>
            <button onClick={() => bookState.handleSaveBook(book.imdbID)}>Save</button>
          </div>
        ))
      ) : null

    }
        <Button
          variant="contained"
          color="primary"
          endIcon={<SearchIcon />}
          onClick={bookState.handleFindBook}
        >
          De-Bug
      </Button>
      </MediaContext.Provider>
    </>
  )
}

export default Home