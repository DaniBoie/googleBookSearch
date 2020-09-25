const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/book/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(( data ) => {
    // data.Search.map(book => ({
    //   title: book.Title,
    //   year: book.Year,
    //   imdbID: book.imdbID,
    //   type: book.Type,
    //   poster: book.Poster
    // }))
    let books = []
    let bookData = data.data.items
      bookData.forEach(book => {
        let bookInfo = book.volumeInfo
        let bookData = {
          title: bookInfo.title,
          authors: bookInfo.authors,
          description: bookInfo.description,
          image: bookInfo.imageLinks.thumbnail,
          link: bookInfo.infoLink
        }
        books.push(bookData)
      });
      console.log(books)
      res.send(books)
    })
  //   .then(apiBook => Book.find()
  //     .then(book => apiBook.filter(data =>
  //       book.every(dbData => dbData.imdbID !== data.imdbID))))
  //   .then(book => res.json(book))
  //   .catch(err => console.log(err))
  console.log('hello')
})
  // & key=AIzaSyAPfD92Yx3Us5nPxqumhj2c6PLfK2W7Zg0
module.exports = router