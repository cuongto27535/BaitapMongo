var express = require('express');
var app = express();
var expressHbs =require('express-handlebars');
app.engine(".hbs", expressHbs.engine({ extname: ".hbs", defaultLayout: null }));
app.set('view engine','.hbs');
app.use(express.static(__dirname+"/images"))
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const url = 'mongodb+srv://ToLeCuong:cuong2k32010@cluster0.t4dvo7u.mongodb.net/baitapmongo?retryWrites=true&w=majority'
const userController = require('./controllers/controller')


app.get('/themsanpham', function(req, res){

    res.render('themsanpham');
});

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json())

mongoose.connect(url,{useUnifiedTopology:true, useNewUrlParser:true})//Kết nối cơ sở dữ liệu
app.use('/bts',userController)
app.listen(process.env.PORT ||'9999');