const { model, Schema } = require('mongoose')

const Book = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    unique: true,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    unique: true,
    required: true
  },
}, { timestamps: true })

module.exports = model('Book', Book)