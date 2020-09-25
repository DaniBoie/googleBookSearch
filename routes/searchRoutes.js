const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/book/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(( data ) => {
    let coverImg
    let books = []
    let bookData = data.data.items
      bookData.forEach(book => {
        let bookInfo = book.volumeInfo
        if (bookInfo.imageLinks !== undefined) {
          coverImg = bookInfo.imageLinks.thumbnail
        } else {
          coverImg = 'https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg'
        }
        let bookData = {
          title: bookInfo.title,
          authors: bookInfo.authors,
          description: bookInfo.description,
          image: coverImg,
          id: book.id
        }
        books.push(bookData)
      });
      // console.log(books)
      res.send(books)
    })
})

module.exports = router