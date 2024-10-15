

const express = require('express');
const router = express.Router();
const singleBooks = require('../../controllers/Books/GetsBooks/singlebooks');
const bookDetails = require('../../controllers/Books/GetsBooks/bookDetails');
const singlebookUpdates = require('../../controllers/Books/UpdateBooks/singlebookupdates');
const updatebooksquantity = require('../../controllers/Books/UpdateBooks/updatebooksquantity');
const AddBooks = require('../../controllers/Books/insertBooks/AddBooks');
const verifyTaken = require('../../middlewares/verifyTaken');
const Securebooks = require('../../controllers/Books/GetsBooks/Securebooks');
const allbooks = require('../../controllers/Books/GetsBooks/allbooks');
const DeleteBooks = require('../../controllers/Books/DeleteBooks/DeleteBooks');



// // middlewares 
// const logger = (req, res, next) => {
//     console.log('log: info', req.method, req.url);
//     next();
// }

router.get('/api/books', verifyTaken, Securebooks)

router.get('/api/all-books',  allbooks)

// find single Books from database
router.get("/api/books/:categoryName",  singleBooks);

// find single books details from database
router.get("/api/book-details/:id", bookDetails);

// add books to database
router.post('/api/books', AddBooks)

// update user data with new data from mongodb database
router.put('/api/book-details/:id', singlebookUpdates)
 
// update quantity data with new data from mongodb database
router.patch('/api/book-detail/:id', updatebooksquantity)

// deltee books from database
router.delete('/api/books/:id', DeleteBooks)




module.exports = router;