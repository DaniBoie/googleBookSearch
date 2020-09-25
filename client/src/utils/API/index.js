import axios from 'axios'

// CREATING API call skeletons to be called globally in the app.
const API = {
  getBook: search => axios.get(`/api/book/${search}`),
  getSavedBook: () => axios.get('/api/book'),
  saveBook: Book => axios.post('/api/book', Book),
  deleteBook: id => axios.delete(`/api/book/${id}`)
}

export default API