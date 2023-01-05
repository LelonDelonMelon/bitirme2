const express = require('express');
const app = express();
const apiRouter = require('./routes')
const config = require('./config');
const bodyParser = require('body-parser');
const errorController = require('./controller/errorController');
const port = process.env.PORT || 8080;
const cors = require('cors');
//set all config files
config();


app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.use(express.static('public'));
app.use(cors())

app.use(bodyParser.urlencoded({
    extended : true
}))
app.use('/api',apiRouter);

app.use((err,res,next) => {
    next()
})






app.use(errorController)



app.listen(process.env.APP_PORT,()=> {
    console.log("Listening at port", process.env.APP_PORT);
});
