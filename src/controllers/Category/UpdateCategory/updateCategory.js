const bookcategories = require("../../../models/bookcategories");

const updateCategory = async(req, res) => {
    const id = req.params.id;
    const uptoCategory = req.body
    const filter = {_id: id};
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        Category_Name: uptoCategory.Category_Name,
        Category_Image: uptoCategory.Category_Image,
      }
    }
    const result = await bookcategories.updateOne(filter, updateDoc, options)
    res.send(result)
  }

module.exports = updateCategory;