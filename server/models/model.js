const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/books')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const bookSchema = new mongoose.Schema({
  coinId: {
    type: String,
    required: true,
  },
  currencyId: {
    type: String,
    required: true,
  },
  ammount: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
