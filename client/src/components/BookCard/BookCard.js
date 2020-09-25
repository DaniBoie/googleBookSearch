import React, { useContext } from 'react'
import MediaContext from '../../utils/MediaContext'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Bookmark'

const BookCard = (props) => {

  const { handleSaveBook } = useContext(MediaContext)

  return (
    <>
      <div key={props.book.title}>
        <img src={props.book.image} alt={props.book.title} />
        <h3>{props.book.title}</h3>
        <h4>Authors: {props.book.authors}</h4>
        <h4>description: {props.book.description}</h4>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SearchIcon />}
          onClick={() => {
            handleSaveBook(props.book.id)
          }}
        >
          Save
      </Button>
      </div>
    </>
  )
}

export default BookCard