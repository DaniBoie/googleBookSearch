import {createContext} from 'react'

const BookContext = createContext({
  search: '',
  books: [],
  handleInputChange: () => { },
  handleSearchBook: () => { },
  handleSaveBook: () => { },
})

export default BookContext