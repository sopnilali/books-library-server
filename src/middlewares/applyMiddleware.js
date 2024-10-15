const { LOCAL_URL, CLIENT } = require("../config/config")
const cors = require('cors');
const cookieParser = require('cookie-parser');

const applyMiddlewares = (app)=>{
    app.use(cors({
   
        origin: [ 
            LOCAL_URL,
            CLIENT
        ],
        credentials: true
    }))
    app.use(cookieParser())

}

module.exports = applyMiddlewares;