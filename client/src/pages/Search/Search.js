import MediaContext from '../../utils/MediaContext'
import React, {useState} from 'react'
import BookCard from '../../components/BookCard'
import API from '../../utils/API'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'

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
    console.log(MediaContext)
  }

  //STUDY!
  bookState.handleSaveBook = (id) => {
    const saveBook = bookState.books.filter(x => x.id === id)[0]
    API.saveBook(saveBook)
    .then((data) => {
      const books = bookState.books.filter(x => x.id !== id)
      setbookState({ ...bookState, books})
    })
    console.log("Saving book!")
  }

  return (
    <>
      <hr />
      <Typography variant="h6">
        Movie/TV Search
          </Typography>

      <form onSubmit={bookState.handleSearchBook}>
        <TextField label="Search" name="search" variant="outlined" value={bookState.search} onChange={bookState.handleInputChange} />
        <p>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SearchIcon />}
            onClick={bookState.handleSearchBook}
          >
            Send
      </Button>

        </p>

      </form>
     <hr />
      {
      bookState.books.length > 0 ? (
        bookState.books.map(book => (
          <BookCard book={book} />
        ))
      ) : null
      }
    </>
  )
}

export default Home