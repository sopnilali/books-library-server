const borowbooks = require("../../../models/borowbooks");


const AddBorrowBooks = async(req, res) => {
    const borrowBooks = req.body;
    const result = await borowbooks.create(borrowBooks);
    res.send(result);
}

module.exports = AddBorrowBooks;
