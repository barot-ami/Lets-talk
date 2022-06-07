let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 9870;
let mongo = require('mongodb');
let mongoUrl = process.env.MongoLiveUrl;
let mongoClient = mongo.MongoClient;
let db;

mongoClient.connect(mongoUrl, (err,client)=> {
    if (err) console.log("Error while Connecting");
    db = client.db("letstalk");
    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`express server listening on port ${port}`);
    })
})
app.get('/', (req, res) => {
    res.sendFile('index.html', { root : __dirname});
})
app.get('/users', (req, res) =>{
    let uid = Number(req.query.uid)
    let query = {}
    if (uid){
        query = {uid:uid}
    }
    db.collection('users').find(query).toArray((err, result) =>{
        if (err) throw err;
        res.send(result);
    })
})
app.get('/user_spec', (req, res) =>{
    let uid = Number(req.query.uid)
    let query = {}
    if (uid){
        query = {uid:uid}
    }
    db.collection('user_spec').find(query).toArray((err, result) =>{
        if (err) throw err;
        res.send(result);
    })
})
app.get('/posts', (req, res) =>{
    let uid = Number(req.query.uid)
    let query = {}
    if (uid){
        query = {uid:uid}
    }
    db.collection('posts').find(query).toArray((err, result) =>{
        if (err) throw err;
        res.send(result);
    })
})
app.get('/friendcount', (req, res) =>{
    let uid = Number(req.query.uid)
    let query = {}
    if (uid){
        query = {uid:uid}
    }
    db.collection('friendcount').find(query).toArray((err, result) =>{
        if (err) throw err;
        res.send(result);
    })
})