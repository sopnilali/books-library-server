const customerReview = require("../../../models/customerreviews");

const showReview = async(req, res) => {
    const result = await customerReview.find()
    res.send(result)
}

module.exports = showReview;