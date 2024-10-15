const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
    Category_Name: { type: String},
    Category_Image: { type: String},
})

const bookcategories = model('bookcategories', categoriesSchema)

module.exports = bookcategories;