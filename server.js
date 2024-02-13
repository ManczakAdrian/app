const express=require('express');
const cors=require ('cors');
const path=require ('path');
const mongoClient = require('mongodb').MongoClient;
const connectToDB=require('./db');
const session = require ('express-session');
const MongoStore=require('connect-mongo');
const mongoose=require('mongoose');

const app=express();
app.listen(process.env.PORT || 8000, ()=>{
    console.log ('Server is running...');
} );
connectToDB();

app.use(cors());
app.use(express.json());


app.use(express.urlencoded({extended:false}));


app.use(session({secret:'xyz567', store: MongoStore.create(mongoose.connection), resave: false, saveUninitialized:false}));

app.use(express.static(path.join(__dirname,'/client/build')));

//app.use ('/api', require ('./routes/ads.routes'));
//app.use ('/api', require ('./routes/users.routes'));
app.use ('/auth', require ('./routes/auth.routes'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(_dirname+'/client/build/index.html'));

});

app.use((req,res)=>{
    res.status(404).send({message:'Not found...'});
});