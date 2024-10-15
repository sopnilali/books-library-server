const books = require("../../../models/books");

const bookDetails  = async (req, res) => {
    const id = req.params.id;
    const query = {_id: id};
    const result = await books.findOne(query);
    console.log(result);
    res.send(result);
}

module.exports = bookDetails;