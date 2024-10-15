const express = require('express');
const AddBorrowBooks = require('../../controllers/BorroBooks/Add/addBorrowBooks');
const borrowDeletes = require('../../controllers/BorroBooks/Deletes/borrowDeletes');
const verifyTaken = require('../../middlewares/verifyTaken');
const borrowBooksList = require('../../controllers/BorroBooks/Get/borrowBooksList');
const router = express.Router();


// find all carts from database
router.get('/api/borrow-books', verifyTaken, borrowBooksList )

    // insert cart item from database
router.post('/api/borrow-books', AddBorrowBooks)

// delete cart item from database
router.delete('/api/borrow-books/:id', borrowDeletes);


module.exports = router