import React, {useContext} from 'react'
import MediaContext from '../../utils/MediaContext'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'

const Form = () => {

  const { search, handleInputChange, handleSearchBook} = useContext(MediaContext)

  return(

    <form onSubmit={handleSearchBook}>
      <TextField  label="Search" name="search" variant="outlined"  value={search} onChange={handleInputChange}/>
      <p>
      <Button
        variant="contained"
        color="primary"
        endIcon={<SearchIcon />}
        onClick={handleSearchBook}
      >
        Send
      </Button>
      </p>
    </form>
  )
}

export default Form