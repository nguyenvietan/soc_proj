const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.render('index',{});
});

router.get('/book',function(req,res){
    
});

module.exports = router;
