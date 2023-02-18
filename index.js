const express = require('express');
const app = express();
const port=5000;
const bodyParser = require('body-parser');
const homeRoutes =require('./routes/home')
const dataRoutes = require('./routes/data.js')

app.use(homeRoutes);

app.use(dataRoutes);
app.use((req,res,next)=>{
    res.status(404).send("<h1>404 Not Found Page</h1>")
})
app.use(bodyParser.urlencoded())


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});