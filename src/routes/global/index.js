
const globalRoutes = (app)=>{
    app.get('/', (req, res) => {
        res.send('Hello Library Apps!')
    })


}

module.exports = globalRoutes;
