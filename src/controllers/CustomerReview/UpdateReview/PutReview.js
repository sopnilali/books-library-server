const customerReview = require("../../../models/customerreviews");

const PutReview = async(req, res) => {
    const id = req.params.id;
    const uptoReview = req.body
    const filter = {_id: id};
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        reviewer_name: uptoReview.reviewer_name,
        reviewer_description: uptoReview.reviewer_description,
        reviewer_image: uptoReview.reviewer_image,
      }
    }
    const result = await customerReview.updateOne(filter, updateDoc, options)
    res.send(result)
  }

module.exports = PutReview;
