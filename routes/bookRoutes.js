const router = require('express').Router()
const { Book } = require('../models')

// GET all Book
router.get('/book', (req, res) => {
  Book.find()
    .then(Book => res.json(Book))
    .catch(err => console.log(err))
})

// POST Book
router.post('/book', (req, res) => {
  Book.create(req.body)
    .then(Book => {
      res.json(Book)
    })
    .catch(err => console.log(err))
})

// PUT Book
router.put('/book/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE Book
router.delete('/book/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(Book => Book.remove())
    .then(Book => res.json)
    .catch(err => console.log(err))
})

module.exports = router