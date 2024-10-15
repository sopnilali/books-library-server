const books = require("../../../models/books");

const singlebookUpdates = async(req, res) => {
    const id = req.params.id;
    const updateBook = req.body
    console.log(updateBook);
    const filter = {_id: id};
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        bookName: updateBook.bookName,
        bookCategory: updateBook.bookCategory,
        qBooks: updateBook.qBooks,
        author_name: updateBook.author_name,
        ratings: updateBook.ratings,
        photoUrl: updateBook.photoUrl,
        shortDes: updateBook.shortDes,
      }
    }
    const result = await books.updateOne(filter, updateDoc, options)
    res.send(result)
  }

  module.exports = singlebookUpdates;
