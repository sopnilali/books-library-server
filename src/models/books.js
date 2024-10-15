const { Schema, model } = require("mongoose");


const bookSchema = new Schema({
    bookName: { type: String},
    bookCategory: { type: String},
    qBooks: { type: Number},
    author_name: { type: String},
    ratings: { type: Number},
    photoUrl: { type: String},
    bookPDF: { type: String},
    shortDes: { type: String},
    createdAt: { type: Date },
    updatedAt: { type: Date }
})

const books = model('books', bookSchema)

module.exports = books;