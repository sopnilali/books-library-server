const books = require("../../../models/books");



const Securebooks = async (req, res) => {
    const result = await books.find();
    res.send(result);
}


module.exports = Securebooks