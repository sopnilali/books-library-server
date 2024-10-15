const express = require('express');
const showReview = require('../../controllers/CustomerReview/GetReview/ShowReview');
const InsertReview = require('../../controllers/CustomerReview/AddReview/InsertReview');
const PutReview = require('../../controllers/CustomerReview/UpdateReview/PutReview');
const router = express.Router();

// all review show
router.get('/api/customer-review', showReview )
// Create review
router.post('/api/customer-review', InsertReview)

// update review by id
router.put('/api/customer-review/:id', PutReview)



module.exports = router