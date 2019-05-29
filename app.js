const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const user=require('./routes/user.route');
let dev_db_url = 'mongodb://harimongo:<password>@cluster0-shard-00-00-bzhv3.mongodb.net:27017,cluster0-shard-00-01-bzhv3.mongodb.net:27017,cluster0-shard-00-02-bzhv3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
const app = express();
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use('/users',user);
let port = 30;


app.post('/createUser', (req, res) => {
    console.log(req.body);

    let User = new user({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        image: req.body.image,
    });
    User.save = function (req, res) {
        if (err) {
            return next(err);
        } res.send('user saved successfully');
    }
})

app.get('/UserDetails',(req,res)=>
{
    User.findId(req.params.id,function(err,user){
        if(err)return next(err);
        res.send(User);

    })
};

app.get('/updateUser',(req,res)=>{
    User.findIdAndUpdate(req.params.id,{$set:req.body},function(err,user){
        if(err)return next(err);
        res.send('User updated');

    })
};

app.post('/deleteUser',(req,res)=>{
    User.findIdAndRemove(req.params.id,function(err,user){
        if(err)return next(err);
        res.send('User Deleted');

    })
};


app.listen(port, () => {
    console.log('server running on port ' + port);
});