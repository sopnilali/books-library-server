const customerReview = require("../../../models/customerreviews");

const InsertReview = async(req, res) => {
    const query = req.body;
    const result = await customerReview.insertOne(query);
    console.log(result);
    res.send(result);
  }

module.exports = InsertReview;
