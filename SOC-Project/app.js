const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session');
const app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: '@#@$SOC#@$#$',
    resave: false,
    saveUninitialized: true
}));

const server = app.listen(3333, function(){
    console.log('This server is running on the port ' + this.address().port );
});

const r_index = require('./routers/restaurants.js');
app.use('/api/restaurants',r_index);
const r_user = require('./routers/user.js');
app.use('/api/user',r_user);
const r_book = require('./routers/book.js');
app.use('/api/book',r_book);
const r_pay = require('./routers/pay.js');
app.use('/api/pay',r_pay);


const router_views = require('./routers/views.js');
app.use('/',router_views);
