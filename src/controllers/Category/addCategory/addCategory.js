const bookcategories = require("../../../models/bookcategories");

const addCategory =    async(req, res) => {
        const query = req.body;
        const result = await bookcategories.create(query);
        console.log(result);
        res.send(result);
}
module.exports = addCategory;
