const books = require("../../../models/books");


const singleBooks = async (req, res) => {
    const categoryName = req.params.categoryName;
    const query = { bookCategory: categoryName };
    const result = await books.find(query);
    res.send(result);
}

module.exports = singleBooks;