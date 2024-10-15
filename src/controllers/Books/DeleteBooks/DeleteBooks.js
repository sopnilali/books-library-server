const books = require("../../../models/books");


const DeleteBooks = async(req, res) => {
    const id = req.params.id;
    const query = {_id: id};
    const result = await books.deleteOne(query);
    console.log(result);
    res.send(result);
}

module.exports = DeleteBooks;