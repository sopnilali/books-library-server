const books = require("../../../models/books");


const AddBooks = async(req, res) => {
    const query = req.body;
    const result = await books.create(query);
    console.log(result);
    res.send(result);
  }

module.exports = AddBooks;