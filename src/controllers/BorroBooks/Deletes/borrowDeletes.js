const borowbooks = require("../../../models/borowbooks");

const borrowDeletes = async(req, res) => {
    const id = req.params.id;
    const query = {_id: id};
    const result = await borowbooks.deleteOne(query);
    console.log(result);
    res.send(result);
}

module.exports = borrowDeletes;