const os=require("os")
os.hostname=()=>"localhost"

const express = require('express');
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

//dot environment config
require('dotenv').config()

//middlewares
app.use(express.json());
app.use(cors({
  origin: [
  "http://localhost:5173",
  "https://library-book-rho.vercel.app",
],
  credentials:true
}));
app.use(cookieParser())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.35itrev.mongodb.net/?retryWrites=true&w=majority`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// // middlewares 
// const logger = (req, res, next) => {
//   console.log('log: info', req.method, req.url);
//   next();
// }


// const verifyTaken = (req, res, next)=> {
//   const token = req?.cookies?.token
//   console.log("token in the middleware", token);
//   if(!token){
//     return res.status(401).send({message: 'unauthorized access'})
//   }
//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if(err) {
//       return res.status(401).send({message: 'unauthorized acces'})
//     }
//     req.user = decoded;
//     next();
//   } )
// }

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    // const bookCategory = client.db(process.env.DB_NAME).collection("book_category");
    // const booksCollection = client.db(process.env.DB_NAME).collection("books");
    // const borrowbooksCollection = client.db(process.env.DB_NAME).collection("borrowbooks");
    // const customer_reviewsCollection = client.db(process.env.DB_NAME).collection("customer_reviewsCollection"); //

    // auth related api

    // app.post('/jwt', async(req, res) => {
    //   const user = req.body
    //   console.log('user for token', user);
    //   const token = jwt.sign(user, process.env.SECRET_KEY, 
    //     {expiresIn:'1h'})
    //     res.cookie('token', token, {
    //     httpOnly: false,
    //     secure: process.env.NODE_ENV === 'production',
    //     sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    //   })
    //   res.send({success: true});
    // })

    // app.post('/logout', async (req, res) => {
    //   const user = req.body;
    //   console.log('logout user', user);
    //   res.clearCookie('token', {maxAge:0}).send({success: true});
    // })
    
    //default shows
    app.get('/', (req, res) => {
        res.send("Welcome to my server")
    })

    // //insert post books
    // app.post('/books', verifyTaken, async(req, res) => {
    //   const query = req.body;
    //   const result = await booksCollection.insertOne(query);
    //   console.log(result);
    //   res.send(result);
    // })

    // //show  books
    // app.get('/books', logger, verifyTaken, async(req, res) => {
    //   const cursor = booksCollection.find()
    //   const result = await cursor.toArray();
    //   res.send(result)
    // })

    // //show all books
    // app.get('/all-books', async(req, res) => {
    //   const cursor = booksCollection.find()
    //   const result = await cursor.toArray();
    //   res.send(result)
    // })
   
    // // find single Books from database
    // app.get("/books/:cname",  async (req, res) => {
    //   const bookCategory = req.params.cname;
    //   const query = {bookCategory};
    //   const cursor = booksCollection.find(query)
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    // // find single books details from database
    // app.get("/book-details/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = {
    //     _id: new ObjectId(id),
    //   };
    //   const result = await booksCollection.findOne(query);
    //   console.log(result);
    //   res.send(result);
    // });
    //     // update user data with new data from mongodb database
    // app.put('/book-details/:id', async(req, res) => {
    //   const id = req.params.id;
    //   const updateBook = req.body
    //   console.log(updateBook);
    //   const filter = {_id: new ObjectId(id)};
    //   const options = { upsert: true };
    //   const updateDoc = {
    //     $set: {
    //       bookName: updateBook.bookName,
    //       bookCategory: updateBook.bookCategory,
    //       qBooks: updateBook.qBooks,
    //       author_name: updateBook.author_name,
    //       ratings: updateBook.ratings,
    //       photoUrl: updateBook.photoUrl,
    //       shortDes: updateBook.shortDes,
    //     }
    //   }
    //   const result = await booksCollection.updateOne(filter, updateDoc, options)
    //   res.send(result)
    // })

    // // update quantity data with new data from mongodb database
    // app.patch('/book-detail/:id', async(req, res) => {
    //   const id = req.params.id;
    //   console.log(id);
    //   const updateQBooks = req.body
    //   const filter = {_id: new ObjectId(id)};
    //   const options = { upsert: true };
    //   const updateDoc = {
    //     $set: {
    //       qBooks: updateQBooks.qBooks,
    //     }
    //   }
    //   const result = await booksCollection.updateOne(filter, updateDoc, options)
    //   res.send(result)
    // })



    // //insert_book_category
    // app.post('/book-category', async(req, res) => {
    //     const query = req.body;
    //     const result = await bookCategory.insertOne(query);
    //     console.log(result);
    //     res.send(result);
    // })

    //Show_book_category
    // app.get('/book-category', async(req, res) => {
    //     const cursor = bookCategory.find()
    //     const result = await cursor.toArray();
    //     res.send(result)
    // })

  //   //insert carts to database
  //   app.post('/borrow-books', async(req, res) => {
  //     const product = req.body;
  //     const result = await borrowbooksCollection.insertOne(product);
  //     console.log(result);
  //     res.send(result);
  // })
    //   // find all carts from database
    //   app.get('/borrow-books', verifyTaken, async (req, res) => {
    //     if (req.user.email !== req.query.email) {
    //       return res.status(403).send({ message: 'forbidden access' })
    //     }
    //     let query = {};
    //     if (req.query?.email) {
    //         query = { email: req.query.email }
    //     }
    //     const result = await borrowbooksCollection.find(query).toArray();
    //     res.send(result)
    // })


  //     // delete cart item from database
  // app.delete('/borrow-books/:id', async(req, res) => {
  //   const id = req.params.id;
  //   const query = {
  //     _id: new ObjectId(id),
  //   };
  //   const result = await borrowbooksCollection.deleteOne(query);
  //   console.log(result);
  //   res.send(result);
  // });

  // //insert_customer_reviews
  // app.post('/customer-review', async(req, res) => {
  //   const query = req.body;
  //   const result = await customer_reviewsCollection.insertOne(query);
  //   console.log(result);
  //   res.send(result);
  // })
//   //Show_customer_reviews
//   app.get('/customer-review', async(req, res) => {
//     const cursor = customer_reviewsCollection.find()
//     const result = await cursor.toArray();
//     res.send(result)
// })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, ()=>{
    console.log("object listening on port", port);
})