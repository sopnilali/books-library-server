const { Schema, model } = require("mongoose");


const customerReviewSchema = new Schema({
    reviewer_name: { type: String},
    reviewer_description: { type: String}, 
    reviewer_image: { type: String},
})

const customerReview = model('customerreviews', customerReviewSchema)

module.exports = customerReview;
