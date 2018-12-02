const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    {execSync} = require('child_process'),
    {Docker} = require('node-docker-api');

const api = new Docker({ socketPath: '/var/run/docker.sock' });
 
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3333, function(){
    console.log('This server is running on the port ' + this.address().port );
});

app.get('/status',function(req,res){
    const data = execSync('fpga-manager list --json');
    // const data = execSync('echo Hello world');

    res.set('Content-Type','application/json');
    res.send(data);
    res.end();
});

app.get('/image',function(req,res){
    api.image.list().then((list) => {
        let arr = [];
        for(i in list){
            arr.push(list[i].data);
        }
        res.set('Content-Type','application/json');
        res.send(arr);
        res.end();
    });
});

app.get('/container',function(req,res){
    api.container.list({all:true}).then((list) => {
        let arr = [];
        for(i in list){
            arr.push(list[i].data);
        }
        res.set('Content-Type','application/json');
        res.send(arr);
        res.end();
    });
});