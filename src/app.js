const express = require('express');
const app = express();
const ConnectDB = require('./db/connectDB');
const globalRoutes = require('./routes/global');
const applyMiddlewares = require('./middlewares/applyMiddleware');
const port = process.env.PORT || 3000

//dot environment config
require('dotenv').config()

// routes configuration
const booksRoutes = require('./routes/books')
const boorowBooksRoutes = require('./routes/borowbooks')
const bookCategoryRoutes = require('./routes/bookcategory')
const customerReviewRoutes = require('./routes/customerreview')
const authenticationRoutes = require('./routes/authentication')
//middlewares
app.use(express.json());
applyMiddlewares(app)




// api routes
app.use(booksRoutes);
app.use(boorowBooksRoutes);
app.use(bookCategoryRoutes);
app.use(authenticationRoutes);
app.use(customerReviewRoutes);



// global routes
globalRoutes(app);


const main = async ()=>{




  await ConnectDB();
    app.listen(port, ()=> {
        console.log(`Server is running on port ${port}`);
    })
}
main().catch(err=> console.log(err));
