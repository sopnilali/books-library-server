const { Schema, model } = require("mongoose");


const borowbooksSchema = new Schema({
    UserName: { type: String},
    BookId: { type: String},
    email: { type: String},
    qBooks: { type: String},
    bookName: { type: String},
    bookCategory: { type: String},
    BookPhoto: { type: String},
    borrowDate: { type: String},
    returnDate: { type: String},
})

const borowbooks = model('borrowbooks', borowbooksSchema)

module.exports = borowbooks;