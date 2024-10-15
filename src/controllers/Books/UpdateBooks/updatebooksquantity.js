const books = require("../../../models/books");

const updatebooksquantity = async(req, res) => {
    const id = req.params.id;
    console.log(id);
    const updateQBooks = req.body
    const filter = {_id: id};
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        qBooks: updateQBooks.qBooks,
      }
    }
    const result = await books.updateOne(filter, updateDoc, options)
    res.send(result)
  }

  module.exports = updatebooksquantity;