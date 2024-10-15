const express = require('express');
const AddBorrowBooks = require('../../controllers/BorroBooks/Add/addBorrowBooks');
const borrowBooks = require('../../controllers/BorroBooks/Get/borrowBooks');
const borrowDeletes = require('../../controllers/BorroBooks/Deletes/borrowDeletes');
const borowbooks = require('../../models/borowbooks');
const verifyTaken = require('../../middlewares/verifyTaken');
const router = express.Router();


// find all carts from database
router.get('/api/borrow-books', verifyTaken, async (req, res) => {
    if (req.user.email !== req.query.email) {
        return res.status(403).send({ message: 'forbidden access' })
    }
    let query = {};
    if (req.query.email) {
        query = { email: req.query.email }
    }
    const result = await borowbooks.find(query);
    res.send(result)
    
})

    // insert cart item from database
router.post('/api/borrow-books', AddBorrowBooks)

// delete cart item from database
router.delete('/api/borrow-books/:id', borrowDeletes);


module.exports = router