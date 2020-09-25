const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/book/:search', (req, res) => {
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&s=${req.params.search}`)
    .then(({ data }) => data.Search.map(book => ({
      title: book.Title,
      year: book.Year,
      imdbID: book.imdbID,
      type: book.Type,
      poster: book.Poster
    })))
    .then(apiBook => Book.find()
      .then(book => apiBook.filter(data =>
        book.every(dbData => dbData.imdbID !== data.imdbID))))
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

module.exports = router