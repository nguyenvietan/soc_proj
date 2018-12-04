const express = require('express');
const router = express.Router();
const mysql = require('../common/db.js');

router.get('/',function(req,res){
    mysql.query('SELECT * FROM restaurants;',function(err,results,fields){
        res.send(results);
        res.end()
    });

});

router.get('/:r_id',function(req,res){
    mysql.query('SELECT * FROM restaurants WHERE id='+req.params.r_id+';',function(err,results,fields){
        if(results.length == 0 || ! 'id' in results[0]){
            res.status(404).send({result: false});
        }else{
            res.send(results[0]);
            res.end()
        }
    });
});

module.exports = router;
