const express = require('express');
const getCategory = require('../../controllers/Category/getCategory/getCategory');
const addCategory = require('../../controllers/Category/addCategory/addCategory');
const updateCategory = require('../../controllers/Category/UpdateCategory/updateCategory');
const router = express.Router();


//Show_book_category
router.get('/api/book-category', getCategory);

router.put('/api/book-category/:id', updateCategory)

//insert_book_category
router.post('/api/book-category', addCategory)


module.exports = router;