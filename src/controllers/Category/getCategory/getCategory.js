const bookcategories = require("../../../models/bookcategories");

const getCategory = async(req, res) => {
    try {
        const result = await bookcategories.find();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = getCategory;