const express = require('express');
const app = express();
const Web3 = require('web3');
const MongoClient = require('mongodb').MongoClient;
const apiRouter = require('./routes')
const config = require('./config');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
app.use(express.json());

app.use(express.urlencoded());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use('/api',apiRouter);
//app.use(express.json())

//set all config files


mongoose.connect("mongodb+srv://egetelli:12345@cluster0.2w26ofd.mongodb.net/userDB");

const walletsSchema = {
    wallet: String
}

const wallets1Scheme = {
    walletss: String
}

const Wallets = mongoose.model("Wallets", walletsSchema);
const Wallets1= mongoose.model("Wallets1", wallets1Scheme);


app.get('/',(req,res) =>{
    res.sendFile(__dirname + '../public/index.html')
});

app.get('/wallet',(req,res) =>{
    res.sendFile(__dirname + '/walletcnct.html')
});




app.post('/formPost',(req,res) =>{
    console.log(req.body);
})

app.post("/", function(req,res){
    let newWallet = new Wallets({
        wallet: req.body.wallet
    });
    newWallet.save();
    res.redirect("/");
})

app.post("/wallet", function(req,res){
    let newWallet1 = new Wallets1({
        walletss: req.body.accounts
    });
    newWallet1.save();
    res.redirect("/");
})






app.listen(port,() =>{
    console.log('Server Started at http://localhost:8080')
});