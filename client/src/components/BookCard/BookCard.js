import React, { useContext } from 'react'
import MediaContext from '../../utils/MediaContext'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'

const BookCard = (props) => {

  const { handleSaveBook, handleFindBook} = useContext(MediaContext)

  return (
    <>
      <div key={props.book.title}>
        <img src={props.book.image} alt={props.book.title} />
        <h3>{props.book.title}</h3>
        <h4>Type: {props.book.authors}</h4>
        <h4>Year: {props.book.description}</h4>
        <h5>Book ID: {props.book.link}</h5>
        <button onClick={() => handleSaveBook(props.book.imdbID)}>Save</button>
      </div>
      <Button
        variant="contained"
        color="primary"
        endIcon={<SearchIcon />}
        onClick={handleFindBook}
      >
      
        De-Bug
      </Button>
    </>
  )
}

export default BookCard