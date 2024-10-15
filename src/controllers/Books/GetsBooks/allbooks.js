const books = require("../../../models/books");


const allbooks = async (req, res) => {
    const result = await books.find();
    res.send(result);
}


module.exports = allbooks